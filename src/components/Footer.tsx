import { assets } from '@/assets/Assets/assets';
import Image from 'next/image';

import React from 'react'
import FooterButton from './FooterButton';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center text-whitelogo'>
       <div className="flex items-center mr-4">
         <Image src={assets.logo} alt='chess logo' width={90}/>
        <h1 className='text-white mx-4'>Chess Nepal</h1>
        </div>
        <p className="text-sm">All right reserved. Copyright @ChessNepal</p>
        <div className="flex ">
        <FooterButton />
        </div>
      
    </div>
  )
}

export default Footer;
