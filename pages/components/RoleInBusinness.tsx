

import { Typography , Progress } from '@material-tailwind/react'
import { Grid,  } from '@nextui-org/react'
import React, { useMemo, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion';


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
const RoleInBusinness = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

  return (
    <motion.div variants={container}
    initial ="hidden"
    whileInView="show"
    viewport={{once:true}}
     className='bg-black '
     id='role'>
    
      
      <motion.h1
  variants={item}
  className=' text-center text-transparent text-6xl font-extrabold  bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>Role in the future of business</motion.h1>
     
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Business model building</Typography>
        <Typography color="white" variant="h6">53%</Typography>
      </div>
        <progress  
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="53"
          
          className=" transition-all ease-out duration-1000
           block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>  
      </motion.div>
      <motion.div  variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Infrastructure and back-end engineering</Typography>
        <Typography color="white" variant="h6">38%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="38"
         
         
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>      
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">product devlopment and coding</Typography>
        <Typography color="white" variant="h6">42%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="42"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Blockchain , commerce and payments</Typography>
        <Typography color="white" variant="h6">37%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="37"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item}  className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">process engineering </Typography>
        <Typography color="white" variant="h6">12%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="12"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Graphics design</Typography>
        <Typography color="white" variant="h6">19%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="19"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Cybersecurity</Typography>
        <Typography color="white" variant="h6">33%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="33"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Content creation</Typography>
        <Typography color="white" variant="h6">29%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="29"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
     
   
    </motion.div>

    
  )
}

export default RoleInBusinness

