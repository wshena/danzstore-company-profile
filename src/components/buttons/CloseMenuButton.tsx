'use client'
import { CloseIcon } from '@/icons'
import { useAppDispatch } from '@/lib/redux/store'
import { setClick } from '@/lib/redux/utilitySlice'
import React from 'react'

const CloseMenuButton = ({label}:{label:string}) => {
  const dispacth = useAppDispatch();
  const handleClick = () => dispacth(setClick({
    label: label,
    value: false
  }));

  return (
    <button onClick={handleClick} className='block md:hidden'>
      <CloseIcon size={25} className='text-black' />
    </button>
  )
}

export default CloseMenuButton