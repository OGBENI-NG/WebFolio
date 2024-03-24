import React from 'react'
import { LuSun } from "react-icons/lu";
import { HiMoon } from "react-icons/hi2";
import logo from "../asset/img/🦆 icon _code_.svg"


export default function Header({themeColor, theme, toggleTheme}) {

  const switchIcon = theme === "light" 
    ?
      <HiMoon className='w-full h-full'/>
    : 
      <LuSun className='w-full h-full text-mainBg'/> 
  ;

  
  return (
    <header className={`flex items-center justify-between py-5 px-4
      border-b-[1.5px] bg-white/5 backdrop-blur-[100px]
      border-borderColor fixed left-0 right-0 top-0 z-10`}>
      <img 
        src={logo} 
        alt="logo"
        className='w-[35px] h-[35px]' 
      />
      <h1 className={`font-Solway ${themeColor} text-3xl font-semibold`}>WebFolio</h1>
      <div onClick={toggleTheme} className='w-[35px] h-[35px]'>
        {switchIcon}
      </div>
    </header>
  )
}
