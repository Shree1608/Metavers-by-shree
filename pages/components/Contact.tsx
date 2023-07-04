

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

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
const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref ,{once:true})
  return (
    <div id='contact'>
 
<motion.div variants={container}
    initial ="hidden"
    whileInView="show"
    viewport={{once:true}} className="container my-24 mx-auto md:px-6">
 
  <motion.section variants={item} className="mb-32">
    <div
      className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://www.verdict.co.uk/wp-content/uploads/2022/08/shutterstock_1722481084-scaled.jpg')]">
    </div>
    <div className="container px-6 md:px-12">
      <div
        className="block rounded-lg bg-[#0a0e22] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
      
        <div className="mx-auto max-w-[700px]">
          <form>
          <h1 ref={ref}
     style={{
      transform : isInView? "none" : "translateY(200px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.5s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.2s"   
     }} className='text-center text-transparent text-6xl font-extrabold p-10 bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>Still need help?</h1>
            <div className="relative mb-6 " data-te-input-wrapper-init>
              <input type="text"
                className="peer block min-h-[auto]  w-full rounded border-blue-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput90" placeholder="Name" />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                htmlFor="exampleInput90">Name
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                className="peer block min-h-[auto] w-full rounded  border-blue-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput91" placeholder="Email address" />
              <label
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                htmlFor="exampleInput91">Email address
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded  border-blue-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1" rows={3} placeholder="Your message"></textarea>
              <label htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
            </div>
            
            <button type="button" data-te-ripple-init data-te-ripple-color="light"
              className="inline-block w-full bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </motion.section>
 
</motion.div>

    </div>
  )
}

export default Contact
