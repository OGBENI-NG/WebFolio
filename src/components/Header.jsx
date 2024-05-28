import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { LuSun } from "react-icons/lu"
import { HiMoon } from "react-icons/hi2"
import NavBar from './NavBar'
import ToggleThemeBtn from './ToggleThemeBtn'


export default function Header(
  {themeColor, toggleTheme, 
    headerNavbarTheme, data,
    visible, appTheme, theme, borderColor,
    toggle, handleToggleNavbar, brandColor
  }
  ) {

  const switchIcon = theme === "light" 
    ?
      <HiMoon className='text-dark'/>
    : 
      <LuSun className='text-light'/> 
  ;

  const toggleNavWidth = ` 
    ${toggle 
      ? 'md:w-[225px] lg:w-[180px] xl:w-[180px] transition-[1s]' 
      :'md:w-[110px] lg:w-[100px] xl:w-[100px] transition-[1s]'}`
  ;
  const toggleTxtStyle = ` 
    ${toggle ? "md:w-max" :"md:w-0 opacity-0"}
  `;


  return (
    <header className={`relative z-50 x`}>
      <div className={` flex items-center justify-center md:justify-start py-2
        ${headerNavbarTheme} md:gap-2 border-b-[1.8px]  lg:border-b-[1px] 
        fixed w-full ${toggleNavWidth} md:left-0 px-5 md:pl-6 md:border-r-[1.8px]
        lg:py-1 lg:pl-5 lg:gap-1 lg:border-r-[1px]
        ${
          visible 
          ? 'top-0 opacity-100 h-[75px] md:h-[100px] lg:h-[80px] xl:h-[70px]' 
          : 'h-[0px] md:h-[100px] lg:h-[80px] xl:h-[70px] opacity-0 md:opacity-100'
        }`
      }>
        <div className={`mr-auto md:m-0 md:pr-1 transition-[1s] 
          ${toggle ? 'lg:-ml-1' : 'lg:-pl-9 xl:-pl-10'}`}>
          <svg 
           className={`w-[50px] h-[50px] 
            ${toggle ? 'lg:w-[40px]':'lg:w-[45px]'}`}
            viewBox="0 0 182 142" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
          <path 
            d="M90.3492 11L67.2328 131M90.3492 41L171 
            71L73.0119 101M44.1164 41L10.5 71L44.1164 101" 
            stroke={`${theme === 'light' ? '#2b7f4f' : '#06C156'}`} 
            strokeWidth="21" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className={`${themeColor} ${toggleTxtStyle}
          font-Solway text-3xl md:text-2xl lg:text-lg 
          font-semibold
         `}
        >
          WebFolio
        </h1>
        <ToggleThemeBtn 
          toggleTheme={toggleTheme}
          className=' ml-auto text-3xl md:hidden'>
          {switchIcon}
        </ToggleThemeBtn>
        <button 
          title='toggle'
          onClick={handleToggleNavbar}
          className={`${appTheme} shadow-[0px_0px_3px_2px_#2b7f4f]
            ${brandColor} rounded-full hidden md:block 
            md:absolute md:-right-5 md:p-[8px] lg:p-[5px] lg:-right-[15px]
            xl:p-[5px]`
          } 
        > 
          <FaChevronRight 
            className={`transition-[1s] text-[2xl] lg:text-base
            ${toggle ? 'rotate-360':'rotate-180'}`}
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
        toggleNavWidth={toggleNavWidth}
        toggleTxtStyle={toggleTxtStyle}
        switchIcon={switchIcon}
      />
    </header>
  )
}
