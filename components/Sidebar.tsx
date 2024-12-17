"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPinIcon, FlagIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { id: 1, name: 'Activity Details', href: '/activity', icon: <FlagIcon className="h-5 w-5 text-black mr-3" /> },
    { id: 2, name: 'Location Details', href: '/location', icon: <MapPinIcon className="h-5 w-5 text-black mr-3" /> },
  ];

  return (
    <div className="w-1/5 border-r-2 border-[#E7E7E7] text-black h-full p-4">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              <div
                className={`flex items-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                  pathname === link.href ? 'bg-[#E7E7E7] text-black' : 'text-gray-600 hover:bg-[#F0F0F0] hover:text-black'
                }`}
              >
                {link.icon}
                {link.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
