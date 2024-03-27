import React from 'react'
import logo from "../asset/img/🦆 icon _code_.svg"


export default function Header(
  {themeColor, toggleTheme, layoutTheme, switchIcon}
  ) {

  return (
    <header className={`flex items-center justify-between p-5 px-4
      border-b-[1px] ${layoutTheme} backdrop-blur-[100px]
       fixed w-full top-0 z-50`}>
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
