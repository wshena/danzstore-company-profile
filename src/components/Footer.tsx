import React from 'react'
import ContentContainer from './container/ContentContainer'
import Link from 'next/link'
import { NAV_LINKS, OUR_SERVICES } from '@/const'
import { CallIcon, InstagramIcon, MailIcon, WhatsappIcon } from '@/icons'
import Logo from './Logo'

const contactUs = [
  {
    id: 1,
    label: 'phone',
    link: '#',
    icon: <CallIcon size={15} className='text-black' />
  },
  {
    id: 2,
    label: 'WhatsApp',
    link: '#',
    icon: <WhatsappIcon size={15} className='text-black' />
  },
  {
    id: 3,
    label: 'Email: danzstore@gmail.com',
    link: '#',
    icon: <MailIcon size={15} className='text-black' />
  }
]

const LinkColumn = ({label, items}:{label:string, items:any}) => {
  return (
    <div className="space-y-5">
      <h3 className='capitalize font-semibold text-md'>{label}</h3>
      <ul className="space-y-2 text-md">
        {items?.map((item:linkProps, idx:number) => (
          <li key={item.id} className='capitalize text-gray-600 hover:text-black transition-colors duration-300 ease-in-out flex items-center gap-2'>
            {item.icon}
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="w-full">
      <ContentContainer>
        <div className="py-5 md:py-8 space-y-10">
          {/* links */}
          <div className='w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-10 md:gap-6 lg:gap-0 items-start md:justify-between'>
            {/* menu links */}
            <LinkColumn label='menu links' items={NAV_LINKS.filter((item:linkProps) => item.label !== 'layanan')} />

            {/* our services */}
            <LinkColumn label='our services' items={OUR_SERVICES} />

            {/* contact us */}
            <LinkColumn label='contact us' items={contactUs} />

            {/* lets talk */}
            <div className="space-y-5 lg:w-[30%]">
              <h3 className='capitalize font-semibold text-md'>let's talk</h3>
              <p className="text-gray-500">Untuk konsultasi dan pemesanan website hubungi tim kami</p>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white shadow-md flex items-center gap-10">
                  <span className='text-sm text-gray-400'>Chat/Call Now</span>
                  <Link href={'#'} className='p-2 rounded-full bg-purple-500 hover:bg-purple-600'>
                    <WhatsappIcon size={15} className='text-white' />
                  </Link>
                </div>
                <Link href={'#'}>
                  <InstagramIcon size={30} className='text-black' />
                </Link>
              </div>
            </div>
          </div>

          {/* copyright section */}
          <div className="w-full gap-y-5 md:gap-0 flex flex-col md:flex-row md:items-center justify-between">
            <Logo />
            <span className="text-sm text-gray-400">©2025 Jasa Website Surabaya All right reserved. Published by danzstore</span>
          </div>
        </div>
      </ContentContainer>
    </footer>
  )
}

export default Footer