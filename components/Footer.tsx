import Image from 'next/image';
import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full p-10 border-t-2 border-[#E7E7E7]'>
      <Image src="/logo.png" alt="logo" width={250} height={96} className='mb-5'/>

      <p className='text-[#6B6B6B] text-base'>Marketplace for searching, filtering and instantly booking team activities</p>

      <div className='flex items-center gap-6 mt-6'>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='w-6 h-6 cursor-pointer'/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram className='w-6 h-6 cursor-pointer'/>
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='w-6 h-6 cursor-pointer'/>
        </a>
        <a href="mailto:your.email@example.com">
          <MdOutlineMail className='w-6 h-6 cursor-pointer'/>
        </a>
      </div>
      <hr className='w-full border-t-2 border-[#E9E9EB] rounded-full my-6'/>
      <p className='text-[#6B6B6B] text-base'>Copyright © 2024</p>
    </div>
  );
};

export default Footer;
