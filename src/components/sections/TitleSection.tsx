import React from 'react'

interface Props {
  title: string,
  breadcrumb: React.ReactNode
}

const TitleSection = ({title, breadcrumb}:Props) => {
  return (
    <section id="breadcrump" className='relative overflow-hidden py-30 md:py-40'>
      {/* background color */}
      <div className="w-full absolute inset-0 bg-[url(/image/blurry.png)] bg-center bg-cover z-0 transform opacity-100"/>

      <div className="relative w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">{title}</h1>

          {/* breadcrump */}
          {breadcrumb}
        </div>
      </div>
    </section>
  )
}

export default TitleSection