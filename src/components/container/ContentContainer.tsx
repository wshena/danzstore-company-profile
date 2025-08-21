import React from 'react'

interface Props {
  children: React.ReactNode
}

const ContentContainer = ({children}:Props) => {
  return (
    <div className='max-w-[1440px] mx-auto px-5 md:px-10 lg:px-25'>
      {children}
    </div>
  )
}

export default ContentContainer