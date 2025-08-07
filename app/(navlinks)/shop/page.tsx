import { superbike } from '@/app/data/bike'
import React from 'react'
import { Bike } from '@/types/types'
import SuperBikeCard from '@/components/FeaturedBikes/SuperBikeCard'

export default function Feat() {
  return (
    <>
<div>
  <p className='text-center ubuntu-bold text-5xl text-white mt-12'>Available Bikes</p>
</div>

    <div className='grid  md:grid-cols-3 2xl:grid-cols-3 gap-4 place-items-center mt-7 '>
      {superbike.map((bike:Bike)=>(
        <div className='bg-gray-800 p-4 rounded-md  '
        key={bike.id}>
  <SuperBikeCard bike = {bike}/>

        </div>
      ))}
    </div>
    </>
    
  )
}


