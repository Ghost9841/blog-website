import { assets } from '@/assets/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center text-whitelogo'>
        <Image src={assets.logo} alt='' width={120}/>
        <p className="text-sm">All right reserved. Copyright @ChessNepal</p>
        <div className="flex ">
        <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("http://localhost:3000")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={assets.facebook_icon} width={50} height={50} alt="facebook icon" />
              </Link>

              <Link
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent("https://yourwebsite.com")}&text=${encodeURIComponent("Check this out!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={assets.twitter_icon} width={50} height={50} alt="twitter icon" />
                </Link>
                <Link
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent("Check this out!")}&body=${encodeURIComponent("I thought you might like this: https://yourwebsite.com")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={assets.googleplus_icon} width={50} height={50} alt="gmail icon" />
                </Link>
        </div>
      
    </div>
  )
}

export default Footer;
