import React,{useContext, useState, useEffect} from 'react'
import { Outlet } from "react-router-dom"
import { LuSun } from "react-icons/lu"
import { HiMoon } from "react-icons/hi2"
import Header from './Header'
import NavBar from './NavBar'
import ThemeContext from '../UseThemeContext'


export default function Layout({themeColor, appTheme}) {
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
  
  

  const headerNavbarTheme = `transition-all duration-500 backdrop-blur-[100px] px-5
    ${theme === 'light' ? 'bg-light/30 border-mid ' : 'bg-darkest border-mid/20 '}` 
  ;

  return (
    <div>
      <Header 
        themeColor={themeColor}
        toggleTheme={toggleTheme}
        theme={theme}
        headerNavbarTheme={headerNavbarTheme}
        switchIcon={switchIcon}
        visible={visible}
      />
        <main className='overflow-hidden transition-all duration-500'>
          <Outlet/>
        </main>
      <NavBar 
        themeColor={themeColor}
        headerNavbarTheme={headerNavbarTheme}
        visible={visible}
      />
    </div>
  )
}
