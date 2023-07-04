import { Button, Card, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import React from 'react'

const Nav = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
    const navList = (
        <ul className=" z-40 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-base  hover:text-blue-500"
          >
            <a href="#home" className="flex items-center">
              Home
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-base  hover:text-blue-500"
          >
            <a href="#about" className="flex items-center">
              About
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-base  hover:text-blue-500"
          >
            <a href="#layers" className="flex items-center">
              Layers
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-base  hover:text-blue-500"
          >
            <a href="#features" className="flex items-center">
              Features
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-base  hover:text-blue-500"
          >
            <a href="#blog" className="flex items-center">
              Blog
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-base  hover:text-blue-500"
          >
            <a href="#technology" className="flex items-center">
              Technology
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-base  hover:text-blue-500"
          >
            <a href="#role" className="flex items-center">
              Role
            </a>
          </Typography>
          
        </ul>
      );
     

  return (
    

    <>
    
      <Navbar className=" sticky top-0 z-40 h-max max-w-full rounded-none py-2 px-4 lg:px-20 lg:py-4 bg-black border-0">
      
        <div className="flex items-center justify-between text-blue-gray-900">
       <div className=' flex items-center'>
       
        <img className=" m-1 w-16 h-16 sm:h-16" src="icons8-meta-48 (1).png" alt="" />

        <span className="self-center ml-1 whitespace-nowrap text-xl font-semibold dark:text-white">
        &copy;Metavers-web
        </span>
       </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block text-base"
            ><a href="#contact">Contact Us</a>
              {/* <span>Contact Us</span> */}
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
           <a href="#contact">Contact Us</a>
            {/* <span>Contact Us</span> */}
          </Button>
        </MobileNav>
      </Navbar>
      
    </>
  )
}

export default Nav
 