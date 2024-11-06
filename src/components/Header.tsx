
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/Assets/logo.png";
import arrow from "@/assets/Assets/arrow.png";
import Link from 'next/link';


const NavBar = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
        <Link href='/' className='hover:shadow-[-7px_-7px_0px_#363636]'>
        <Image src={logo} width={40} alt ='logo' className='w-[80px]  sm:w-auto'/>
        </Link>
        
        <button className="flex items-center gap-2 font-poppins font-medium py-1 
        px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_black]">
           Get started<Image src={arrow} alt='arrow'/> </button>
      </div>
    </div>
  )
}

export default NavBar
