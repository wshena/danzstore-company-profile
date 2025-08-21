'use client'
import React from 'react'
import { RootState, store, useAppSelector } from '@/lib/redux/store'
import MobileNavbar from '../MobileNavbar'

interface Props {
  children: React.ReactNode
}

const MainContainer = ({children}:Props) => {
  const {click} = useAppSelector((state:RootState) => state.utility);

  return (    
    <div className={`
      relative
      ${click.value && 'h-screen overflow-hidden'}  
    `}>
      <MobileNavbar />
      {children}
    </div>
  )
}

export default MainContainer