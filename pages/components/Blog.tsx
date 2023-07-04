import React, { useEffect, useRef, useState } from 'react'
import data from '../components/data.json'
import { useInView } from 'framer-motion';

interface Resource {
    title: string;
    imageUrl: string;
    link: string;
  }
  
  interface Data {
    resources: Resource[];
  }
  
  // Import the data with the appropriate type declaration

const Blog = () => {
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

<div className='' id='blog'  >
  <div>
  <h1 ref={ref}
     style={{
      transform : isInView? "none" : "translateY(200px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.5s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.2s"   
     }} className='text-center text-transparent  text-6xl font-extrabold  bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>Blogs and Articles</h1>
     
    </div> 
    
 <div className='h-[90vh]  flex justify-center ' ref={ref}
     style={{
      transform : isInView? "none" : "translateY(200px)",
      opacity : isInView? 1 : 0 ,
      transition :"all 0.9s cubic-bezier(0.17 ,0.55, 0.55, 1) 0.5s"   
     }}>
        <div className="carousel  pt-16  lg:max-w-5xl sm:max-w-2xl max-w-md">
                  
     
                  <div className="relative overflow-hidden">
                    <div className="flex justify-between absolute top left w-full h-full">
                      <button
                        onClick={movePrev}
                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 rounded-2xl"
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
                        className="hover:bg-blue-900/75 rounded-2xl text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
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
            
                   
                    className="carousel-container relative flex  rounded-2xl overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    style={{ scrollSnapType: 'x mandatory' }}
                             ref={carousel}
                   >
                      {data.resources && data.resources.map((resource, index) => {
                        return (
                          <div
                            key={index}
                            className="carousel-item text-center  relative object-cover lg:w-4/12 lg:h-[60vh]  sm:h-[60vh]  sm:w-6/12 w-6/12 h-[45vh] rounded-lg snap-start m-auto"
                          >
                            <a
                              href={resource.link}
                              className="h-full lg:w-auto sm:w-auto w-[300px]  aspect-square block   bg-cover  z-0"
                              style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                            >
                              <img
                                src={resource.imageUrl || ''}
                                alt={resource.title}
                                className=" aspect-auto h-[45vh] lg:h-[60vh] sm:h-[60vh] w-auto  "
                              />
                            </a>
                            <a
                              href={resource.link}
                              className="h-full w-full aspect-square block  absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                            >
                              <h3 className="text-white py-6 px-3 mx-auto  text-xl">
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

    
   
  )
}

export default Blog
