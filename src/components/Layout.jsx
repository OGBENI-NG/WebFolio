import React,{useContext, useState, useEffect} from 'react'
import { Outlet } from "react-router-dom"
import { LuSun } from "react-icons/lu"
import { HiMoon } from "react-icons/hi2"
import Header from './Header'
import NavBar from './NavBar'
import ThemeContext from '../UseThemeContext'


export default function Layout() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

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
    ? 'bg-white/75 border-slate-900/10' 
    : 'bg-black/75 border-slate-300/10'
  ;

  return (
    <div>
      <Header 
        themeColor={themeColor}
        toggleTheme={toggleTheme}
        theme={theme}
        layoutTheme={layoutTheme}
        switchIcon={switchIcon}
        visible={visible}
      />
        <main className='overflow-hidden transition-all duration-300'>
          <Outlet/>
        </main>
      <NavBar 
        themeColor={themeColor}
        layoutTheme={layoutTheme}
        visible={visible}
      />
    </div>
  )
}
