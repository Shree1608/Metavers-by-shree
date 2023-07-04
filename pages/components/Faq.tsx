import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { Fragment, useState } from "react";
// import { Upanimation } from './animation';


function Icon({ id, open }:{id : number , open:number}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } text-white h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
const Faq = () => {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value:number) => {
      setOpen(open === value ? 0 : value);
    };
  
    const ref = useRef(null)
    const isInView = useInView(ref ,{once:true})
  return (
  <div className=' lg:pt-10 lg:pl-40 lg:pr-40 p-20'>
   
     <h1 ref={ref}
     style={{
      transform : isInView? "none" : "translateY(200px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.5s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.2s"   
     }} className='text-center text-transparent text-6xl font-extrabold  bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>FAQS</h1>
         <div className=' pt-10'>
            <Fragment >
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='' >
        <AccordionHeader onClick={() => handleOpen(1)} className='text-white border border-blue-900 p-4 rounded-lg '>
        How do you access the metaverse?
        </AccordionHeader>
        <AccordionBody className='text-white  p-4  '>
        Facebook &lsquo; s metaverse is yet to exist. When it does, it will be accessible via VR headsets, augmented reality smart glasses like Ray-Ban Stories, and on desktop and mobile apps in a limited way.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className='text-white border border-blue-900 p-4 rounded-lg'>
        Are there any regulations around the metaverse?
        </AccordionHeader>
        <AccordionBody className='text-white p-4'>
        While the metaverse is too young to come under the jurisdiction of traditional regulations, Facebook is looking to get a headstart on compliance. It is working with several educational and legal institutions to make sure that they tread carefully.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className='text-white border border-blue-900 p-4 rounded-lg'>
        What are the defining features of the metaverse?
        </AccordionHeader>
        <AccordionBody className='text-white p-4'>
        As an excellent essay by Mathew Ball explains the metaverse will be persistent, real-time, infinite, interoperable, and self-sustaining
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className='text-white border border-blue-900 p-4 rounded-lg'>
        Who will run the metaverse?
        </AccordionHeader>
        <AccordionBody className='text-white p-4'>
        Mark Zuckerberg commented in an interview with Verge that the metaverse will be like an “embodied internet,” operated by multiple decentralised players. Facebook will not be running the metaverse.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} className='text-white border border-blue-900 p-4 rounded-lg'>
        What are the business opportunities around metaverse?
        </AccordionHeader>
        <AccordionBody className='text-white p-4'>
        The metaverse would be a massive economic engine. Facebook expects demand for 10,000 highly-skilled jobs in the EU alone, mainly comprising content creators and AR/VR startups. In the future, users can expect to earn money in the metaverse as well.
        </AccordionBody>
      </Accordion>
            </Fragment>
         </div>
  </div>
  )
}

export default Faq

