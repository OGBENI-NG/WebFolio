import React from 'react'
import { LuSun } from "react-icons/lu";

export default function Header({logo}) {
  return (
    <header className={`flex items-center justify-between py-5 px-4
      bg-white backdrop-blur-[100px] border-b-[1.5px]
      border-borderColor fixed left-0 right-0 top-0`}>
      <img 
        src={logo} 
        alt="logo"
        className='w-[35px] h-[35px]' 
      />
      <h1 className='font-Solway text-primary text-3xl font-semibold'>WebFolio</h1>
      <LuSun className='h-[35px] w-[35px]'/>
    </header>
  )
}
