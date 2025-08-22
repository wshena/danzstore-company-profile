'use client'
import React, { useEffect, useState } from 'react'
import ContentContainer from './container/ContentContainer'
import { NAV_LINKS } from '@/const'
import Link from 'next/link'
import MobileNavMenuButton from './buttons/MobileNavMenuButton'
import Image from 'next/image'
import Logo from './Logo'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Ubah nilai 50 sesuai dengan kapan navbar harus berubah
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`
      fixed z-50 top-0 left-0 w-full
      transition-all duration-300 ease-in-out
      ${isScrolled 
        ? 'bg-gray-100 shadow-md' 
        : 'backdrop-filter backdrop-blur-md bg-opacity-10'
      }
    `}>
      <ContentContainer>
        <nav className='text-black font-semibold flex items-center justify-between py-5'>
          {/* logo */}
          <Logo />

          {/* tablet and desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((item) => (
              <li key={item.id} className="text-sm md:text-md capitalize relative">
                {item.label === 'layanan' ? (
                  <div className="relative group">
                    <span className="cursor-pointer">{item.label}</span>
                    
                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {item.dropDownLink?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.id}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.link} className="hover:text-blue-600 transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* mobile menu button */}
          <MobileNavMenuButton />
        </nav>
      </ContentContainer>
    </header>
  )
}

export default Navbar