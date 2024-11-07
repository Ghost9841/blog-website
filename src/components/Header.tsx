
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/Assets/logo.png";
import arrow from "@/assets/Assets/arrow.png";
import Link from 'next/link';
import TransitionEffect from './TransitionEffect';


const NavBar = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <TransitionEffect/>
      <div className="flex justify-between items-center">
       <div className="flex items-center">
        <Link href='/' className=''>
        <Image src={logo} width={40} alt ='logo' className='w-[80px]  sm:w-auto hover:border-2 hover:border-black'/>
        </Link>
        <Link href='/' className=''>
        <h1 className="font-bold mx-4 font-poppins">Chess Nepal</h1>
        </Link>
       </div>
        
        <button className="flex items-center gap-2 font-poppins font-medium py-1 
        px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_black]">
           Get started<Image src={arrow} alt='arrow'/> </button>
      </div>
    </div>
  )
}

export default NavBar
