import React,{useContext, useState, useEffect} from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from '../Footer'
import LogoAnim from '../LoadingLogo'


export default function Layout({themeColor, borderColor, data, bodyPadding,
  footerTheme, bodyTxt, theme, toggleTheme, appTheme, toggle, handleToggleNavbar,
  brandColor}) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  
  
  const headerNavbarTheme = `transition-color ${borderColor}
    ${theme === 'light' ? 'bg-lightest ' : 'bg-darkest/95'}` 
  ;

  return (
    <div>
      {isLoading ? (
        <div className={`grid place-content-center h-screen m-auto`}>
          <h1 className={`${themeColor} font-bold text-5xl md:text-8xl
           text-center mt-auto font-Solway`}>welcome</h1>
         <LogoAnim className={`m-auto h-[400px] pt-[120px] md:pt-[180px]`}/>
        </div>
        
      ) :(
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
            brandColor={brandColor}
          />
        </div>
       
      )}
      
    </div>
  )
}
