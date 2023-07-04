
import {  Card, CardBody, CardFooter,  MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import React, { useRef } from 'react'
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import { Popover, Button, Text, Dropdown ,} from "@nextui-org/react";
import { relative } from 'path';
import { motion, useInView } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren:0.4,
    }
  }
}
const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "tween",
      damping: 5,
      stiffness: 70,
    }
  }
}

const Technology = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})
  return (

 



<motion.div 
variants={container}
initial ="hidden"
whileInView="show"
viewport={{once:true}}

className=' bg-black' id='technology'>
  <h1
  ref={ref}
  style={{
   transform : isInView? "none" : "translateY(100px)",
   opacity : isInView? 1 : 0 ,
   transition :"all 0.9s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.5s"   
  }}
  className=' text-center text-transparent text-6xl font-extrabold  bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>Key Technology</h1>
<div className="overflow-hidden  py-24 sm:py-16  " id=''>
  
<div className="mx-auto lg:max-w-7xl sm:px-1 px-16 lg:px-40  ">
  <div id='card' className="mx-auto grid justify-center lg:justify-center sm:justify-center max-w-2xl sm:max-w-none grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <div className=" lg:pt-4 sm:pr-20 sm:pl-40 lg:pl-0  pl-28">
      <div className="lg:max-w-lg">
       <motion.div variants={item} >
       <Card className=" w-64 h-50 bg-black border border-blue-800">
      <CardBody>
      <img src="./Ai.png" alt="" className=' ml-16  h-14 sm:h-20' />
        <Typography variant="h3" color="blue-gray" className="mt-2 text-center text-white">
        AI
        </Typography>
        
      </CardBody>
      <CardFooter className="pt-0 text-center">
     

<span
        className="relative overflow-hidden text-blue-500 cursor-pointer group hover:overflow-visible focus-visible:outline-none"
        aria-describedby="tooltip-01"
      >
       
       Core Features
       
        <span
          role="tooltip"
          id="tooltip-01"
          className="invisible absolute top-full left-1/2 z-10 mt-2 w-48 -translate-x-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
        >
          Computer Controlled Action , 
          Avtars,
          Language Processing Iot
        </span>
      </span>
      </CardFooter>
    </Card>
       </motion.div>
       <motion.div className=' pt-10'  variants={item}>
       <Card className=" w-64 h-50 bg-black border border-blue-800">
      <CardBody>
        <img src="./blockchain.png" alt="" className=' ml-16  h-16 sm:h-20' />
        <Typography variant="h3" color="blue-gray" className=" text-center mt-2 text-white">
          Blockchain
        </Typography>
        
      </CardBody>
      <CardFooter className="pt-0 text-center">
     <span
        className="relative overflow-hidden text-blue-500 cursor-pointer group hover:overflow-visible focus-visible:outline-none"
        aria-describedby="tooltip-01"
      >
       
       Core Features
       
        <span
          role="tooltip"
          id="tooltip-01"
          className="invisible absolute top-full left-1/2 z-10 mt-2 w-48 -translate-x-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
        >
          Decentralization ,
          Interoperability,
          Storage
        </span>
      </span>
      </CardFooter>
    </Card>
        </motion.div> 
    
      </div>
    </div>
   
    <div className='lg:pt-4 lg:px-48 sm:pl-10 pl-28 '>
        <motion.div variants={item}>
        <Card className=" w-64 h-50 bg-black border border-blue-800">
      <CardBody>
        <img src="./Screenshot 2023-06-29 at 5.01.38 PM.png" alt="" className=' ml-12  h-16 sm:h-20' />
        <Typography variant="h3" color="blue-gray" className=" text-center mt-2 text-white">
        AR and VR
        </Typography>
        
      </CardBody>
      <CardFooter className="pt-0 text-center">
     <span
        className="relative overflow-hidden text-blue-500 cursor-pointer group hover:overflow-visible focus-visible:outline-none"
        aria-describedby="tooltip-01"
      >
       
       Core Features
       
        <span
          role="tooltip"
          id="tooltip-01"
          className="invisible absolute top-full left-1/2 z-10 mt-2 w-48 -translate-x-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
        >
          Embedding Virtual Objects,
          Connectivity,
          Immersive Graphics
        </span>
      </span>
      </CardFooter>
    </Card>
        </motion.div>
        <motion.div variants={item} className='pt-10'>
        <Card className=" w-64 h-50 bg-black border border-blue-800">
      <CardBody>
        <img src="./Screenshot 2023-06-29 at 5.28.00 PM.png" alt="" className=' ml-2 w-48  h-16 sm:h-20' />
        <Typography variant="h3" color="blue-gray" className=" text-center mt-2 text-white">
        3D modeling
        </Typography>
        
      </CardBody>
      <CardFooter className="pt-0 text-center">
     <span
        className="relative overflow-hidden text-blue-500 cursor-pointer group hover:overflow-visible focus-visible:outline-none"
        aria-describedby="tooltip-01"
      >
       
       Core Features
       
        <span
          role="tooltip"
          id="tooltip-01"
          className="invisible absolute top-full left-1/2 z-10 mt-2 w-48 -translate-x-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
        >
          Photo-realistic objects,
          Vivid Experience,
          Digital Twins
        </span>
      </span>
      </CardFooter>
    </Card>
        </motion.div>
    </div>
    
  </div>
</div>
<motion.div variants={item} className=' grid justify-center pt-10 '>
<Card className=" w-64 h-50 bg-black border border-blue-800">
      <CardBody>
        <img src="https://img.freepik.com/premium-vector/internet-things-concept-with-line-icon_31543-186.jpg?w=996" alt="" className=' ml-6  h-20 sm:h-24 w-36' />
        <Typography variant="h3" color="blue-gray" className=" text-center mt-1 text-white">
        IoT
        </Typography>
        
      </CardBody>
      <CardFooter className="pt-0 text-center">
     <span
        className="relative overflow-hidden text-blue-500 cursor-pointer group hover:overflow-visible focus-visible:outline-none"
        aria-describedby="tooltip-01"
      >
       
       Core Features
       
        <span
          role="tooltip"
          id="tooltip-01"
          className="invisible absolute top-full left-1/2 z-10 mt-2 w-48 -translate-x-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
        >
          Data Managment ,
          Integration ,
          Real-time Simulations 
        </span>
      </span>
      </CardFooter>
    </Card>
</motion.div>
</div>

</motion.div>


    
  )
}

export default Technology
