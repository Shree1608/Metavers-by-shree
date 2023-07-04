import React, { useEffect, useRef } from 'react'

import { motion, useInView } from 'framer-motion'



const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref ,{once:true})
  return (

<div className='bg-black' id='about'>
    
     <h1 ref={ref}
     style={{
      transform : isInView? "none" : "translateY(100px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.9s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.5s"   
     }} className='text-center text-transparent text-6xl font-extrabold pt-14 bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>About</h1>
      
    <div className="overflow-hidden py-24 sm:py-24  " >
  <div className="mx-auto max-w-7xl px-6 lg:px-20">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
  
    <div className="lg:pr-8 lg:pt-4  lg:-ml-[70px]"
     ref={ref}
     style={{
      transform : isInView? "none" : "translateX(-200px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.9s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.5s"   
     }}
    >
        <div className="lg:max-w-lg  lg:ml-20" 
        > 
          <h2 className="text-base font-semibold leading-7  text-blue-500">History</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  text-transparent  bg-clip-text bg-gradient-to-r from-white via-blue-300 to-blue-700 sm:text-4xl">What is the metaverse?</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          The metaverse can be defined as a simulated digital environment that uses augmented reality (AR), virtual reality (VR), and blockchain, along with concepts from social media, to create spaces for rich user interaction mimicking the real world.
          </p>
          <a href="https://www.forbes.com/sites/bernardmarr/2022/03/21/a-short-history-of-the-metaverse/?sh=c778c5659688" className='text-base font-semibold leading-7  text-blue-500 cursor-pointer'>Learn More .... </a>
        </div>
    </div> 

   
   
   
    <img
        src="https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/06/image-PP4QVB6.png"
        alt="Product screenshot"
        className="  w-[23rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem]  sm:-ml-[-100px] lg:-ml-[-100px]  transition duration-300 ease-in-out hover:scale-110"
        ref={ref}
     style={{
      transform : isInView? "none" : "translateX(200px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.9s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.5s"   
     }}
      />
     
     
    </div>
  </div>
</div>
  </div>
 
    
    
  )
}

export default About
