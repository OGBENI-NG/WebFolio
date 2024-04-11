import React from 'react'
import logo from "../asset/img/🦆 icon _code_.svg"


export default function Header(
  {themeColor, toggleTheme, layoutTheme, switchIcon, visible}
  ) {

  return (
    <header className={`flex items-center justify-between py-2 px-4
      border-b ${layoutTheme}
       fixed w-full z-50 transition-all duration-300
       ${visible ? 'top-0 opacity-100 h-[75px]' : 'h-[0px] opacity-0'}`}>
      <img 
        src={logo} 
        alt="logo"
        className='w-[60px] h-[60px]' 
      />
      <h1 className={`font-Solway ${themeColor} text-3xl font-semibold`}>WebFolio</h1>
      <div onClick={toggleTheme} className='w-[35px] h-[35px]'>
        {switchIcon}
      </div>
    </header>
  )
}
