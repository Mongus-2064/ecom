"use client"

import {  ClipboardPaste } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Herosection() {
  return (
    <div>
      <section>
        <div className='flex justify-center flex-col items-center'>
          <p className=' z-5 mt-6 md:mt-12 text-4xl md:text-6xl ubuntu-bold text-white/80 '>Resale <span className='ubuntu-bold bg-white text-black/80 px-2 rounded-md'>Your</span> Ride</p>
          <p className='mt-10 text-white/90 px-3 md:px-0 md:w-[80%] z-10 text-wrap leading-6 tracking-wide'>
            Welcome to the ultimate destination for buying and selling bikes that actually hold their value. Whether you are a rider looking for your next upgrade or someone ready to sell, our platform connects you with verified listings, honest pricing, and real resale insights — no scams, no confusion, just smooth rides and smart deals
          </p>
          <div className='flex mt-12 z-10 items-center justify-center md:justify-around gap-4 flex-col md:flex-row w-[90%]'>
            <Link 
            className='text-black flex justify-center gap-2 items-center bg-white px-5 py-2  w-[50%]  rounded-md hover:scale-105 transition-all duration-100'
            href="/shop"><ClipboardPaste/>Book a Bike</Link>
            <Link 
           className='text-white border border-white px-5 py-2 text-center w-[50%]  rounded-md hover:scale-105 transition-all duration-100'
            href="/sell" >Sell Bike</Link>
          </div>
        </div>
      </section>
      <hr className='text-gray-800 mt-12'/>
    </div>
  )
}
