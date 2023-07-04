
import { Card } from 'flowbite-react'
import React from 'react'
import { Upanimation } from './animation'

const Home1 = () => (
   
 <div id='home' className='  px-10 bg-gradient-to-br from-black via-black to-blue-500 h-[95vh] sm:h-[110vh] md:h-[100vh] lg:h-[70vh] lg:mx-0 lg:max-w-none grid grid-cols-1 lg:grid-cols-2'>
        <Upanimation>
            <div className=' sm:grid justify-items-center'>
            <div className='transition duration-300 ease-in-out hover:scale-90  '>
            <img
                className="   lg:px-0 lg:pt-20 sm:pt-10 px-10   pt-16 w-[35rem] rounded-xl shadow-xl  lg:-ml-[-100px]  "
                src="https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/06/image-MGDQ6WZ-800x573.png" alt="" />
                <div  className=' max-w-sm rounded-md bg-gradient-to-br lg:ml-48 ml-auto sm:ml-24 '>
                    <Card className="max-w-sm bg-transparent">
                        <h5 className="text-2xl font-bold text-white ">
                            <p>
                            Parallel universes or Multiple universes
                            </p>
                        </h5>
                    </Card>
                </div>
            </div> 
            </div>
        </Upanimation>
       <Upanimation>
       <div className=' sm:pt-16 lg:pt-40 pt-11  '>
            <h1 className=' text-center font-extrabold text-transparent lg:text-6xl sm:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400'>
                Dive Into the Future With
            </h1>
            <h1 className='  text-center font-extrabold text-transparent lg:text-6xl sm:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400'>
                Virtual Reality
            </h1>
            <p className='text-center font-semibold text-gray-500 text-xl p-12' >Imagine a virtual world where billions of people live, work, shop, learn and interact with each other -- all from the comfort of their couches in the physical world</p>
        </div>
       </Upanimation>
        


    </div>
   
   
)

export default Home1
