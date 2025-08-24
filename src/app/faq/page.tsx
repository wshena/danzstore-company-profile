import ContentContainer from '@/components/container/ContentContainer'
import TitleSection from '@/components/sections/TitleSection'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { QUESTIONS } from '@/const';
import { ArrowDropDownCircleOutlined } from '@mui/icons-material';

const page = () => {
  return (
    <main className="">
      {/* title */}
      <TitleSection title='FAQ' breadcrumb={
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>FAQ</Typography>
        </Breadcrumbs>
      } />

      {/* faq */}
      <section id="faq" className="pb-10 md:pb-15 lg:pb-25">
        <ContentContainer>
          <div className="flex flex-col items-center gap-10">
            {/* heading */}
            <div className="text-center space-y-1">
              <span className="text-sm md:text-md text-gray-500 uppercase">FAQ Danzstore</span>
              <h1 className="capitalize font-semibold text-gray-700 text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">freqyently asked questions</h1>
              <p className="text-sm lg:text-md xl:text-lg text-justify text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, a.</p>
            </div>

            {/* faq */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-7 md:gap-10">
              {QUESTIONS.map((item:any) => (
                <Accordion key={item.id}>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownCircleOutlined />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  )
}

export default page