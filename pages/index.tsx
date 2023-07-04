import Image from 'next/image'
import { Inter } from 'next/font/google'


import Nav from './components/Nav'
import Home1 from './components/home'
import About from './components/About'
import Layers from './components/Layers'
import Features from './components/Features'
import Blog from './components/Blog'
import Technology from './components/Technology'
import RoleInBusinness from './components/RoleInBusinness'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Faq from './components/Faq'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
   <div className=' bg-gradient-to-br from-black via-black to-black '>
     
     <Nav/>
     <Home1/>
   
     <About/>
     <div className='mt-1'>
     </div>
     <Layers/>
     <Features/>
<Blog/>
<Technology/>
<RoleInBusinness/>
<Contact/>
<Faq/>
<Footer/>
   </div>
    
  )
}
