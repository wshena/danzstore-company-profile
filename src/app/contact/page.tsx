'use client'
import ContentContainer from '@/components/container/ContentContainer'
import ContactForm from '@/components/forms/ContactForm'
import TitleSection from '@/components/sections/TitleSection'
import { CallIcon, ClockIcon, MailIcon } from '@/icons'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <main className="">
      {/* title */}
      <TitleSection title='Kontak Kami' breadcrumb={
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Kontak</Typography>
        </Breadcrumbs>
      } />

      {/* kontak form */}
      <section id="contact" className="pb-10 md:pb-15 lg:pb-25">
        <ContentContainer>
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            {/* typewriting */}
            <div className="w-full md:w-[40%] space-y-3">
              <div className="space-y-1">
                <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">marketing <span className="text-purple-500">danzstore</span></h1>
                <p className="text-sm lg:text-md xl:text-lg text-justify text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum atque quasi porro aperiam. Alias quas dolores saepe quod, illo cupiditate cumque ipsum, vitae vero dicta a accusantium, perferendis aliquam illum.</p>
              </div>

              <ul className="space-y-3">
                <li>
                  <Link href={'#'} className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-blue-100">
                      <CallIcon size={25} className='text-blue-500' />
                    </div>
                    <div className="text-black flex flex-col -gap-1">
                      <span className="text-sm">Get in touch</span>
                      <span className='font-semibold text-md'>Phone Number</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={'#'} className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-blue-100">
                      <MailIcon size={25} className='text-blue-500' />
                    </div>
                    <div className="text-black flex flex-col -gap-1">
                      <span className="text-sm">Email Address</span>
                      <span className='font-semibold text-md'>danzstore@gmail.com</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={'#'} className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-blue-100">
                      <ClockIcon size={25} className='text-blue-500' />
                    </div>
                    <div className="text-black flex flex-col -gap-1">
                      <span className="text-sm">Operational</span>
                      <span className='font-semibold text-md'>07.00 - 16.30 WIB</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* form */}
            <ContactForm />
          </div>
        </ContentContainer>
      </section>
    </main>
  )
}

export default page