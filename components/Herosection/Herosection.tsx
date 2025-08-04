import React from 'react'

export default function Herosection() {
  return (
    <div>
      <section>
        <div className='flex justify-center flex-col items-center'>
          <p className=' z-5 mt-6 md:mt-12 text-4xl md:text-6xl ubuntu-bold text-white/80 '>Resale <span className='ubuntu-bold bg-white text-black/80 px-2 rounded-md'>Your</span> Ride</p>
          <p className='mt-10 text-white/90 z-10 text-wrap leading-6 tracking-wide'>
            Welcome to the ultimate destination for buying and selling bikes that actually hold their value. Whether you're a rider looking for your next upgrade or someone ready to sell, our platform connects you with verified listings, honest pricing, and real resale insights — no scams, no confusion, just smooth rides and smart deals
          </p>
        </div>
      </section>
    </div>
  )
}
