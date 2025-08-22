import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={'/image/Logo.jpeg'} width={50} height={60} alt='danzstore-logo' />
    </Link>
  )
}

export default Logo