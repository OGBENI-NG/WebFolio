import React,{ useState, useEffect} from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import LogoAnim from './LoadingLogo'


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
    }, 4000)
  }, [])


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
      {isLoading ? (
        <div className={`${themeColor} grid place-content-center h-screen m-auto text-center`}>
          <h1 className={` font-bold text-5xl md:text-8xl
           text-center mt-auto font-Solway pt-10`}>welcome</h1>
           <p className='px-6 pt-12 md:px-16 lg:pt-6 text-lg md:text-2xl 
            leading-normal'>
            I'm excited to share my projects with you. Let's 
            build something incredible together!</p>
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
            brandColor={brandColor}
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
