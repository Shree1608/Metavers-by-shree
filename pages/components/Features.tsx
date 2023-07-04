

import React, { useEffect, useRef, useState } from 'react'

import data from '../components/data.json'
import { useInView } from 'framer-motion';

const features = [
  {
    name: '1. Incorporation of avatars. ...',
  },
  {
    name: '2. Blockchain-based operations. ...',
  },
  {
    name: '3. Immersive Experiences (AR and VR) ...',
  
  },
]
const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref ,{once:true})



    const maxScrollWidth = useRef<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carousel = useRef<HTMLDivElement | null>(null);
  
    const movePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
      }
    };
  
    const moveNext = () => {
        if (
          carousel.current !== null &&
          carousel.current.offsetWidth * (currentIndex + 1) <= maxScrollWidth.current
        ) {
          setCurrentIndex((prevState) => prevState + 1);
        }
      };
  
      const isDisabled = (direction: 'prev' | 'next'): boolean => {
        if (direction === 'prev') {
          return currentIndex <= 0;
        }
    
        if (direction === 'next' && carousel.current !== null) {
          return carousel.current.offsetWidth * (currentIndex + 1) >= maxScrollWidth.current;
        }
    
        return false;
      };
  
      useEffect(() => {
        if (carousel.current !== null) {
          carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
      }, [currentIndex]);
    
      useEffect(() => {
        maxScrollWidth.current = carousel.current
          ? carousel.current.scrollWidth - carousel.current.offsetWidth
          : 0;
      }, []);
  return (
    <div className='bg-black' id='features'>
        <h1  ref={ref}
     style={{
      transform : isInView? "none" : "translateY(200px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.5s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.2s"   
     }}
         className='text-center text-transparent text-6xl font-extrabold pt-10 bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>Features of Metaverse</h1>
    <div className="overflow-hidden py-24 sm:py-24 lg:py-7  " id='features'>
  <div className="mx-auto max-w-7xl px-6 lg:px-20   rounded-xl">
    <div className="mx-auto grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-11">
    <div className="lg:pr-8 lg:pt-4  lg:-ml-[70px]    "
    ref={ref}
    style={{
     transform : isInView? "none" : "translateX(-200px)",
     opacity : isInView? 1 : 0 ,
     transition :"all 0.5s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.5s"   
    }} >
        <div
        className="lg:max-w-lg  lg:ml-20">
         
          <p className="mt-2 text-3xl font-bold tracking-tight  text-transparent  bg-clip-text bg-gradient-to-r from-white via-blue-300 to-blue-700 sm:text-4xl">The metaverse have various features:</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
         
         The metaverse is an open and accessible three-dimensional virtual world with multiple shared and persistent digital spaces
          </p>
          <dl className=" m-5 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-400">
                     
                      {feature.name}
                    </dt>{' '}
                    
                  </div>
                ))}
              </dl>
          <div className="carousel my-12 mx-auto">
                  
     
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div

       
        className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory    touch-pan-x z-0"
        style={{ scrollSnapType: 'x mandatory' }}
                 ref={carousel}
       >
          {data.resources && data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-56 h-64 sm:w-56 sm:h-64 lg:h-64 lg:w-64 snap-start"
              >
                <a
                  href={resource.link}
                  className="h-full w-full  aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full  aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
        </div>
      </div>
   
   
    <img
        src="https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/06/image-2GRWDDQ.png"
        alt="Product screenshot"
        className="  w-[25rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem]  lg:-ml-[-100px] sm:-ml-[-100px] transition duration-300 ease-in-out hover:scale-110"
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

export default Features
