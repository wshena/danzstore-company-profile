'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../buttons/Button'

interface Props {
  id: number | string ,
  label: string,
  desc: string,
  detail: string,
  price: string
}

const DetailButton = ({detail}:{detail:string}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="w-full transition-all duration-300 ease-in-out">
      <button onClick={handleClick} className="cursor-pointer capitalize">
        detail layanan
      </button>

      {/* detail */}
      <div className={`
        overflow-hidden transition-all duration-700 ease-in-out mt-3
        ${click ? 'min-h-70 opacity-100' : 'h-0 opacity-0'}
      `}>
        <div className="p-3 text-sm md:text-md">
          <p>{detail}</p>
        </div>
      </div>
    </div>
  )
}

const DigitalServiceCard = ({item, icon}:{item:Props, icon:React.ReactNode}) => {
  return (
    <div className='hover:-translate-y-5 p-10 rounded-md bg-white shadow-xl flex flex-col items-start gap-5 transition-all duration-300 ease-in-out'>
      {/* title */}
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="capitalize text-xl">{item.label}</h3>
      </div>

      {/* desc */}
      <p className="text-gray-600 text-sm md:text-md">{item.desc}</p>

      {/* detail button */}
      <DetailButton detail={item.detail} />

      {/* price */}
      <div className="w-full flex items-center justify-center">
        <span className='text-xl'>{item.price}</span>
      </div>

      {/* detail button */}
      <div className="w-full flex items-center justify-center">
        <Link href={'#'}>
          <Button className="bg-gray-100 cursor-pointer hover:bg-purple-400 hover:text-white text-sm font-semibold text-purple-600 group">
            <span className="group-hover:text-white capitalize">baca detail</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default DigitalServiceCard