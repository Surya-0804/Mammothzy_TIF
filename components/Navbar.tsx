import Image from 'next/image'
import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'; 


export const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-2 border-b-2 border-[#E7E7E7]'>
        <Image src="/logo.png" alt="logo" width={195.26} height={75}/>
        <div className='flex items-center gap-2'>
        <UserCircleIcon className="h-7 w-7 text-gray-700" /> 
        <p className="text-gray-700">Profile</p>
        </div>
    </div>
  )
}
