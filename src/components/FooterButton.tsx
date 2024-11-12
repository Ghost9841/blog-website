"use client";
import { assets } from "@/assets/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FooterButton = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div className="flex">
      {/* Facebook Share Button */}
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl || "https://blog-website-chess-nepal.netlify.app/"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={assets.facebook_icon} width={50} height={50} alt="facebook icon" />
      </Link>


      <Link
        href={`https://x.com/intent/tweet?url=${encodeURIComponent(
          currentUrl || "https://blog-website-chess-nepal.netlify.app/"
        )}&text=${encodeURIComponent("Check this out!")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={assets.twitter_icon} width={50} height={50} alt="twitter icon" />
      </Link>


      <Link
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent(
          "Check this out!"
        )}&body=${encodeURIComponent(
          "I thought you might like this: " + (currentUrl || "https://blog-website-chess-nepal.netlify.app/")
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={assets.googleplus_icon} width={50} height={50} alt="gmail icon" />
      </Link>
    </div>
  );
};

export default FooterButton;
