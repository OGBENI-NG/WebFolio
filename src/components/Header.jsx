import React from 'react'
import logo from "../asset/img/🦆 icon _code_.svg"


export default function Header(
  {themeColor, toggleTheme, headerNavbarTheme, switchIcon, visible}
  ) {

  return (
    <header className={`flex items-center justify-center py-2
      border-b-[1px] ${headerNavbarTheme}
       fixed w-full z-50 
       ${visible ? 'top-0 opacity-100 h-[75px]' : 'h-[0px] opacity-0'}`}>
      <img 
        src={logo} 
        alt="logo"
        className='w-[60px] h-[60px] mr-auto' 
      />
      <h1 className={`font-Solway ${themeColor} text-3xl font-semibold`}>WebFolio</h1>
      <div onClick={toggleTheme} className='w-[35px] h-[35px] ml-auto'>
        {switchIcon}
      </div>
    </header>
  )
}
