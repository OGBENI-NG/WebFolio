import React,{useContext, useState, useEffect} from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from '../Footer'


export default function Layout({themeColor, borderColor, data, bodyPadding,
  footerTheme, bodyTxt, theme, toggleTheme, appTheme, toggle, handleToggleNavbar}) {
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

  
  
  const headerNavbarTheme = `transition-color ${borderColor}
    ${theme === 'light' ? 'bg-lightest ' : 'bg-darkest'}` 
  ;

  return (
    <div>
      <Header 
        themeColor={themeColor}
        toggleTheme={toggleTheme}
        toggle={toggle}
        handleToggleNavbar={handleToggleNavbar}
        theme={theme}
        headerNavbarTheme={headerNavbarTheme}
        visible={visible}
        appTheme={appTheme}
        data={data}
        borderColor={borderColor}
      />
      <main className={`overflow-hidden`}>
        <Outlet/>
      </main>
      <Footer 
        data={data}
        footerTheme={footerTheme}
        bodyTxt={bodyTxt}
        theme={theme}
        bodyPadding={bodyPadding}
      />
    </div>
  )
}
