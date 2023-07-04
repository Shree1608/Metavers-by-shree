import { AnimatePresence, motion } from "framer-motion"

export const Upanimation = ({children} : any) => (
  
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