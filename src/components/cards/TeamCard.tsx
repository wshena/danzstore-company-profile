import Image from 'next/image'
import React from 'react'

const TeamCard = ({item}:{item:teamCardProps}) => {
  return (
    <div className='relative'>
      <Image src={item.image} alt={item.label} width={300} height={300} className='rounded-2xl w-[200px] h-[200px] md:w-[300px] lg:h-[200px] 2xl:h-[200px]' />
      <div className="absolute w-full left-0 -bottom-5 xl:-bottom-8 flex items-center justify-center">
        <div className="p-2 text-center shadow-md w-[90%] rounded-md bg-white">
          <span className="uppercase text-sm xl:text-lg">{item.label}</span>
        </div>
      </div>
    </div>
  )
}

export default TeamCard