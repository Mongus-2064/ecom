import React from 'react'
import Menu from './Navlinks/Menu'
import Maxwidthwrapper from './Maxwidthwrapper'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='h-20  relative'>
      <Image
      className='absolute  -z-1 h-[340px] object-cover shadow-gray-800 shadow-sm '
      src="/s1k.jpg" alt='s1k' width={1600} height={0}/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 pointer-events-none h-[350px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-100 -z-1 pointer-events-none h-[250px]" />
       
        <Maxwidthwrapper>
             <Menu/>
        </Maxwidthwrapper>
       
    </div>
  )
}
