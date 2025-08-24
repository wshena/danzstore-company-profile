import TeamCard from '@/components/cards/TeamCard'
import ContentContainer from '@/components/container/ContentContainer'
import TitleSection from '@/components/sections/TitleSection'
import { TEAMS } from '@/const'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="">
      {/* title */}
      <TitleSection title='tentang kami' breadcrumb={
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Tentang Kami</Typography>
        </Breadcrumbs>
      } />

      {/* abous us */}
      <section id="about-us" className="py-10 md:py-15 lg:py-25">
        <ContentContainer>
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center md:justify-between">
            {/* image */}
            <div className="relative w-full md:w-[45%] h-[300px] md:h-[400px] xl:h-[550px]">
              {/* decoration */}
              <div className="absolute top-0 left-0">
                <Image src={'/image/doodle1.svg'} width={100} height={100} alt="doodle-1" className="" />
              </div>

              <Image src={'/image/jasa-website-surabay-rev.png'} width={300} height={300} alt="profil-jasa-website-surabaya-.webp" className="w-full h-full" />
            </div>

            {/* typewriter */}
            <div className="w-full md:w-[50%] space-y-6">
              <div className="space-y-1">
                <span className="text-sm md:text-md text-gray-500 uppercase">tentang kami</span>
                <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">jasa pembuatan <span className="text-purple-500">website</span> terbaik no.1 surabaya</h1>
              </div>
              <p className="text-sm lg:text-md xl:text-lg text-justify text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum atque quasi porro aperiam. Alias quas dolores saepe quod, illo cupiditate cumque ipsum, vitae vero dicta a accusantium, perferendis aliquam illum.</p>
              <p className="text-sm lg:text-md xl:text-lg text-justify text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non, voluptates natus nihil, ducimus minima omnis culpa dolor similique dignissimos quam doloribus sequi exercitationem labore?</p>
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* our teamm */}
      <section id="chat-link" className="pb-10 md:pb-15 lg:pb-25">
        <ContentContainer>
          <div className="flex flex-col items-center gap-10">
            {/* heading */}
            <div className="text-center space-y-1">
              <span className="text-sm md:text-md text-gray-500 uppercase">our team</span>
              <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">tim profesional</h1>
            </div>

            {/* teams */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:flex items-center lg:justify-between gap-10 lg:gap-3 2xl:gap-10">
              {TEAMS.map((item:teamCardProps) => (
                <TeamCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  )
}

export default page