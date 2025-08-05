import { superbike } from '@/app/data/bike'
import React from 'react'
import SuperBikeCard from './SuperBikeCard'
import { Bike } from '@/types/types'

export default function Feat() {
  return (
    <div>
      {superbike.map((bike:Bike)=>(
        <div key={bike.id}>
  <SuperBikeCard bike = {bike}/>

        </div>
      ))}
    </div>
  )
}
