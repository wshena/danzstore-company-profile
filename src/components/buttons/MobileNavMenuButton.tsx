'use client'
import { MenuIcon } from '@/icons'
import { useAppDispatch } from '@/lib/redux/store'
import { setClick } from '@/lib/redux/utilitySlice'
import React from 'react'

const MobileNavMenuButton = () => {
  const dispacth = useAppDispatch();
  const handleClick = () => dispacth(setClick({
    label: 'mobile-nav-menu',
    value: true
  }));

  return (
    <button onClick={handleClick} className='block md:hidden'>
      <MenuIcon size={20} className='text-black' />
    </button>
  )
}

export default MobileNavMenuButton