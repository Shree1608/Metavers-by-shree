import { AnimatePresence, motion } from "framer-motion"

import React from 'react'

const Upanimation = ({children} : any) => {
  return (
    <AnimatePresence>
         <motion.div 
            initial = {{opacity : 0,y :70}}
            animate = {{opacity :1 , y:0}}
            exit={{opacity:0 ,y:96}}
            transition={{
                duration:1,
                type:'keyframes' ,
                delay:0.25 ,
                ease :'easeInOut'
            }}
        >
             {children}
         </motion.div>
     </AnimatePresence>
  )
}

export default Upanimation
