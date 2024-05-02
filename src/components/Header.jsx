import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { LuSun } from "react-icons/lu"
import { HiMoon } from "react-icons/hi2"
import NavBar from './NavBar'
import ToggleThemeBtn from '../ToggleThemeBtn'


export default function Header(
  {themeColor, toggleTheme, 
    headerNavbarTheme, data,
    visible, appTheme, theme, borderColor,
    toggle, handleToggleNavbar
  }
  ) {

  const switchIcon = theme === "light" 
    ?
      <HiMoon className='w-full h-full text-dark'/>
    : 
      <LuSun className='w-full h-full text-light'/> 
  ;

  const toggleStyle = `md:transition-all duration-300 
    ${toggle ? 'md:w-[220px] ' :'md:w-[110px]'}`
  ;
  const toggleTxtStyle = ` 
    ${toggle ? "md:opacity-100" :"md:opacity-0"}
  `;


  return (
    <header className={`relative z-50 `}>
      <div className={`flex items-center justify-center md:justify-start py-2
        ${headerNavbarTheme}  md:gap-2 border-b-[1px] md:border-b-[2px]
        fixed w-full ${toggleStyle}  md:left-0  px-4 md:pl-6 md:border-r-[3px]
        ${
          visible 
          ? 'top-0 opacity-100 h-[75px] md:h-[100px]' 
          : 'h-[0px] md:h-[100px] opacity-0 md:opacity-100'
        }`
      }>
        <div className={`mr-auto md:m-0 md:pr-1`}>
          <svg 
           className='w-[50px] h-[50px]'
            viewBox="0 0 182 142" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
          <path 
            d="M90.3492 11L67.2328 131M90.3492 41L171 
            71L73.0119 101M44.1164 41L10.5 71L44.1164 101" 
            stroke="rgb(56, 189, 248)" 
            strokeWidth="21" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className={`${themeColor} ${toggleTxtStyle}
          font-Solway text-3xl md:text-2xl font-semibold`}
        >
          WebFolio
        </h1>
        <ToggleThemeBtn 
          toggleTheme={toggleTheme}
          className='w-[35px] h-[35px] ml-auto md:hidden'>
          {switchIcon}
        </ToggleThemeBtn>
        <button 
          title='toggle'
          onClick={handleToggleNavbar}
          className={`${appTheme} shadow-[0px_0px_3px_2px_#38bdf8]
            text-brand p-[10px] rounded-full hidden md:block 
            md:absolute md:-right-6 `
          } 
        > 
          <FaChevronRight 
            className={`transition-all  duration-500 text-2xl]`}
          />
        </button>
      </div>
      <NavBar 
        themeColor={themeColor}
        headerNavbarTheme={headerNavbarTheme}
        visible={visible}
        LuSun={LuSun}
        HiMoon={HiMoon}
        toggleTheme={toggleTheme}
        theme={theme}
        data={data}
        borderColor={borderColor}
        toggle={toggle}
        handleToggleNavbar={handleToggleNavbar}
        toggleStyle={toggleStyle}
        toggleTxtStyle={toggleTxtStyle}
        switchIcon={switchIcon}
      />
    </header>
  )
}
