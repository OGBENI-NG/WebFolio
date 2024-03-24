import React,{useContext} from 'react'
import { Outlet } from "react-router-dom"
import Header from '../Header'
import Footer from '../Footer'
import ThemeContext from '../../UseThemeContext'


export default function Layout() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  const themeColor = theme === "light" ?
    "block text-primary" : "block text-primaryDark"
  ;

  return (
    <div>
      <Header 
        themeColor={themeColor}
        toggleTheme={toggleTheme}
        theme={theme}
      />
        <main>
          <Outlet/>
        </main>
      <Footer themeColor={themeColor}/>
    </div>
  )
}
