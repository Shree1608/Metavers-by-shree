'use client'
import React from 'react'
import { Navbar } from 'flowbite-react'


const Navbar1 = () => {
   
  return (

<Navbar className=' bg-gradient-to-r from-black via-black to-black text-white sticky top-0 right-o left-0' 
      fluid
      rounded
    >
      <Navbar.Brand
       
        href="https://flowbite-react.com"
      >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-16 sm:h-20"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a22409139331353.622e09cf163bf.jpg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className=' text-white text-base' id='navLink'
         
          href="#"
        >
          
            Home
          
        </Navbar.Link>
        <Navbar.Link id='navLink' className=' text-white text-base'
         
          href="#"
        >
          
            About
          
        </Navbar.Link >
        <Navbar.Link id='navLink' href="#" className=' text-white text-base'>
          Layers
        </Navbar.Link>
        <Navbar.Link id='navLink' href="#" className=' text-white text-base'>
          Features
        </Navbar.Link>
        <Navbar.Link id='navLink' href="#" className=' text-white text-base'>
          Blog
        </Navbar.Link>
        <Navbar.Link id='navLink' href="#" className=' text-white text-base'>
          Platforms
        </Navbar.Link>
        <Navbar.Link id='navLink' href="#" className=' text-white text-base'>
          FAQ
        </Navbar.Link>
        <Navbar.Link id='navLink' href="#" className=' text-white text-base'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
   
  )
}

export default Navbar1
 