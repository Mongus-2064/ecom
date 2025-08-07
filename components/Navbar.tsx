"use client";

import React from 'react'
import Menu from './Navlinks/Menu'
import Maxwidthwrapper from './Maxwidthwrapper'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isHome = pathname === "/"

  return (
    <div className="relative h-20  ">
      <div className='absolute inset-0 bg-gradient-to-t from-gray-700  to-black opacity-100 h-22  shadow-white shadow-sm '></div>
      {isHome && (
        <>
          <Image
            className="absolute inset-0 w-full h-[340px] object-cover z-0"
            src="/s1k.jpg"
            alt="s1k"
            width={1600}
            height={340}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 z-10 h-[350px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-100 z-10 h-[250px] pointer-events-none" />
        </>
      )}

      <div className="relative z-20">
        <Maxwidthwrapper>
          <Menu />
        </Maxwidthwrapper>
      </div>
    </div>
  )
}
