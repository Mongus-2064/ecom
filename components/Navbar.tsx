import React from 'react'
import Menu from './Menu'
import Maxwidthwrapper from './Maxwidthwrapper'

export default function Navbar() {
  return (
    <div className='h-20 bg-slate-200'>
        <Maxwidthwrapper>
             <Menu/>
        </Maxwidthwrapper>
       
    </div>
  )
}
