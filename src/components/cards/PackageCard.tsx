'use client'
import { AngleRightIcon, HollowCircleIcon, ToggleOffIcon, ToggleOnIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const FeatureButton = ({items}:{items:string[]}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="w-full transition-all duration-300 ease-in-out">
      <button onClick={handleClick} className="cursor-pointer py-2 text-sm px-5 border w-full rounded-b-2xl flex items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          {click ? (
            <ToggleOnIcon size={20} className='text-black' />
          ) : (
            <ToggleOffIcon size={20} className='text-black' />
          )}
          <span>fitur paket</span>
        </div>
      </button>

      {/* feature list */}
      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out mt-3
        ${click ? 'min-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <ul className="px-5 space-y-2">
          {items?.map((item) => (
            <li key={item} className='text-sm flex items-center gap-3'>
              <HollowCircleIcon size={10} className='text-black' />
              {item}
            </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

const PackageCard = ({item}:{item:packageProps}) => {
  return (
    <div className='p-5 bg-white rounded-xl shadow-md flex flex-col items-center gap-5 transition-all duration-300 ease-in-out'>
      {/* icon */}
      <Image src={item.icon} alt={item.label} width={100} height={100} className='' />

      {/* name and price */}
      <div className="flex flex-col items-center -gap-1">
        <span className='uppercase text-sm'>{item.label}</span>
        <span className="text-blue-600 text-3xl font-semibold">{item.price}</span>
      </div>

      {/* description */}
      <div className="relative bg-gray-100 text-center p-3 rounded-md">
        <p className="text-sm text-gra-600 pb-15">{item.desc}</p>

        {/* link for booking */}
        <div className="absolute left-0 -bottom-5 w-full flex items-center justify-center">
          <Link href={'#'} className='group flex bg-blue-500 items-center justify-between rounded-full w-[90%] xl:w-[80%] px-5 py-1 text-center'>
            <span className="font-semibold capitalize text-white text-sm">booking</span>
            <div className="p-3 w-fit rounded-full bg-white transition-all duration-300 ease-in-out group-hover:translate-x-3">
              <AngleRightIcon size={15} className='text-black' />
            </div>
          </Link>
        </div>
      </div>

      <span className="mt-7 text-md xl:text-lg">{item.extention}</span>

      {/* package feature */}
      <FeatureButton items={item.feature} />
    </div>
  )
}

export default PackageCard