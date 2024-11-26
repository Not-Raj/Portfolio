"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname hook

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div
      className={`flex justify-center items-center h-16 text-white mt-5 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      style={{ transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}
    >
      <div className='h-[100%] w-[60%] flex justify-center items-center'>
        <div className='h-[100%] lg:[70%] flex justify-between items-center bg-[#807d7d] hover:bg-[#928f8f] text-[#e9e5e5] text-xl font-semibold p-2 px-16 rounded-full cursor-pointer gap-5'>
          <div className='text-black font-bold mr-20'>Not._.Rajjj</div>

          <Link href="/">
            <div className={`${isActive('/') ? 'text-black underline underline-offset-4 font-semibold' : 'hover:text-[#1A1A1A]'}`}>Home</div>
          </Link>

          <Link href="/about">
            <div className={`${isActive('/about') ? 'text-black underline underline-offset-4 font-semibold' : 'hover:text-[#1A1A1A]'}`}>About</div>
          </Link>

          <Link href="/work">
            <div className={`${isActive('/work') ? 'text-black underline underline-offset-4 font-semibold' : 'hover:text-[#1A1A1A]'}`}>Work</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
