import React, { useState } from 'react'
import CloseMenuButton from './buttons/CloseMenuButton';
import { RootState, useAppSelector } from '@/lib/redux/store'
import { NAV_LINKS } from '@/const';
import Link from 'next/link';

const MobileNavbar = () => {
  const {click} = useAppSelector((state:RootState) => state.utility);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className={`
      fixed md:hidden top-0 left-0 w-full h-screen bg-gray-100 text-black z-100
      transition-all duration-500 ease-in-out
      ${(click.value) ? 'left-0' : 'translate-x-[1000px]'}  
    `}>
      <div className="p-10 flex flex-col gap-8 items-start">
        {/* close button */}
        <div className="w-full flex items-center justify-end">
          <CloseMenuButton label='mobile-nav-menu' />
        </div>

        {/* links */}
        <ul className="space-y-4 w-full">
          {NAV_LINKS.map((item) => (
            <li key={item.id} className="text-sm md:text-md font-semibold capitalize relative w-full">
              {item.label === 'layanan' ? (
                <div className="w-full">
                  {/* Toggle button for services */}
                  <button 
                    className="flex items-center justify-between w-full hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>{item.label}</span>
                    <span className="transform transition-transform duration-300">
                      {isServicesOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  
                  {/* Collapse menu */}
                  <div className={`
                    overflow-hidden transition-all duration-300 ease-in-out mt-3
                    ${isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <ul className="pl-4 pt-2 space-y-5">
                      {item.dropDownLink?.map((dropdownItem) => (
                        <li key={dropdownItem.id}>
                          <Link
                            href={dropdownItem.link}
                            className="block text-sm hover:text-blue-600 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.link} 
                  className="hover:text-blue-600 transition-colors block w-full py-1"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar