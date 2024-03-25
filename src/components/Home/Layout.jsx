import React,{useContext} from 'react'
import { Outlet } from "react-router-dom"
import { LuSun } from "react-icons/lu";
import { HiMoon } from "react-icons/hi2";
import Header from '../Header'
import Footer from '../Footer'
import ThemeContext from '../../UseThemeContext'


export default function Layout() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  const switchIcon = theme === "light" 
    ?
      <HiMoon className='w-full h-full'/>
    : 
      <LuSun className='w-full h-full text-mainBg'/> 
  ;

  const themeColor = theme === "light" ?
    "block text-primary" : "block text-primaryDark"
  ;
  const layoutTheme = theme === 'light' 
    ? 'bg-white/80 border-borderColor' : 'bg-black/80 border-[#263238]'
  ;

  return (
    <div>
      <Header 
        themeColor={themeColor}
        toggleTheme={toggleTheme}
        theme={theme}
        layoutTheme={layoutTheme}
        switchIcon={switchIcon}
      />
        <main>
          <Outlet/>
        </main>
      <Footer 
        themeColor={themeColor}
        layoutTheme={layoutTheme}
      />
    </div>
  )
}
