
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/Assets/logo.png";
import arrow from "@/assets/Assets/arrow.png";


const NavBar = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
        <Image src={logo} width={40} alt ='logo' className='w-[80px]  sm:w-auto'/>
        
        <button className="flex items-center gap-2 font-poppins font-medium py-1 
        px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_black]">
           Get started<Image src={arrow} alt='arrow'/> </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Veniam inventore eos necessitatibus? Quae doloremque placeat voluptatum expedita? Officia consectetur quo nemo eveniet labore tempora voluptates vel eaque. Provident, reiciendis modi?</p>
     <form action="" className="flex justify-between max-w-[500px] scale-100 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_black]">
        <input type="email" placeholder="Enter your @email"className="pl-4 outline-none" />
        <button type='submit' className="border-l border-black py-4 px-4 sm:px-8 active:bg-red-600 active:text-white">Subscribe</button>
     </form>
      </div>
    </div>
  )
}

export default NavBar
