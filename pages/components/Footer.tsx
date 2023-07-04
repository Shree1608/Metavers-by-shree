import { Typography } from '@material-tailwind/react'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-black  p-14 pt-20 '>
       <footer className="flex w-full flex-row flex-wrap items-center  justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal text-white">
      2023 &copy;Metaverse-web
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-white">
        <li>
          <Typography
            as="a"
            href="#about"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-600 focus:text-blue-600"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#features"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-600 focus:text-blue-600"
          >
            Features
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#blog"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-600 focus:text-blue-600"
          >
            blogs
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#contact"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-600 focus:text-blue-600"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
    </div>
  )
}

export default Footer
