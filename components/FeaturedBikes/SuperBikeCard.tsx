import { Bike } from '@/types/types'
import Image from 'next/image'
import React from 'react'

interface props {
    bike : Bike
}

export default function SuperBikeCard({bike} : props) {
  return (
    <div>
<p className='text-red-500'>{bike.name}</p>
<p className='text-red-500' >{bike.engine}</p>
<p className='text-red-500' >{bike.description}</p>
<p className='text-red-500' >{bike.price}</p>
<Image src={bike.image} width={20} height={20} alt='superbike'/>
    </div>
  )
}
