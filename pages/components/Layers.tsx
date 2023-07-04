
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


  
const Layers = () => {
 const ref = useRef(null)
  const isInView = useInView(ref,{once:true})
  return (
<motion.div 
 variants={container}
 initial ="hidden"
 whileInView="show"
 viewport={{once:true}}
id='layers'
className=' bg-black'>
    <div className=''>
    <h1 ref={ref}
     style={{
      transform : isInView? "none" : "translateY(100px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.9s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.5s"   
     }}
    className=' pt-10 text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-700 font-extrabold'>Layers of Metaverse</h1>
    </div>
   
<div className="container bg-black mx-auto w-full pt-16 h-full">
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-20  h-full border left-1/2" ></div>
 
    <div className="mb-8 flex justify-between items-center w-full right-timeline ">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-blue-700 shadow-xl w-8 h-8 rounded-full ">
        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <motion.div variants={item} className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4 border border-blue-900" 
      
      >
        <h3 className="mb-3 font-bold text-white text-xl">Experience:</h3>
        <p className="text-sm leading-snug tracking-wide text-white text-opacity-100"> The metaverse is all about experiences. The kind of buzz it has created and the investments it has attracted are all because of the lifelike experiences it is poised to offer.</p>
      </motion.div>
    </div>

    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1  bg-blue-700 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <motion.div variants={item} className="order-1 border border-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4" 
       
      >
        <h3 className="mb-3 font-bold text-white text-xl">Discovery:</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 ">This layer talks about the experiential discoveries that result from a continuous “push and pull” of information. It is this information “push and pull” that acquaints users with new experiences.</p>
      </motion.div>
    </div>
    

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1  bg-blue-700 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <motion.div variants={item} className="order-1 bg-black  border border-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
       
      >
        <h3 className="mb-3 font-bold text-white text-xl">Creator economy:</h3>
        <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">The vision of the metaverse is to create an immersive 3D world with interconnected virtual spaces that would mirror reality. These spaces, powered by AR, VR and other similar technologies.</p>
      </motion.div>
    </div>


    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1  bg-blue-700 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <motion.div variants={item} className="order-1 bg-black border border-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Spatial computing:</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Spatial computing has already made our lives easier with virtual assistants and ride-hailing apps. It has made fashion fun and shopping more convenient by allowing shoppers to try on clothes in virtual changing rooms.</p>
      </motion.div>
    </div>

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1  bg-blue-700 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
      </div>
      <motion.div variants={item} className="order-1 bg-black  border border-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Decentralization:</h3>
        <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">Decentralized finance (DeFi) is a way to make financial products available via a decentralized blockchain network. Anyone can use DeFi wallets such as MetaMask and Trust Wallet without going through banks or brokerages.</p>
      </motion.div>
    </div>

    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1  bg-blue-700 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
      </div>
      <motion.div variants={item}  className="order-1 bg-black  border border-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Human interface:</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">The human interface layer talks about the hardware or the devices that will enable users to experience the true magic of the metaverse.</p>
      </motion.div >
    </div>

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1  bg-blue-700 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">7</h1>
      </div>
      <motion.div variants={item} className="order-1 bg-black border border-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Infrastructure:</h3>
        <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">This layer pertains to the technological infrastructure that will be required to create a fully functional and interoperable metaverse.</p>
      </motion.div >
    </div>

  </div>
</div>
</motion.div>
    
  )
}

export default Layers
