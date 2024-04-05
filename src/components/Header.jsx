import React from 'react'
import logo from "../asset/img/🦆 icon _code_.svg"


export default function Header(
  {themeColor, toggleTheme, layoutTheme, switchIcon, visible}
  ) {

  return (
    <header className={`flex items-center justify-between p-5 px-4
      border-b-[1px] ${layoutTheme} backdrop-blur-[100px]
       fixed w-full z-50 transition-opacity duration-300
       ${visible ? 'top-0 opacity-100' : 'opacity-0'}`}>
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
