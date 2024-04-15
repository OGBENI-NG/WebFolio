import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home/Home'
import Work from './Work/Work'
import About from './About/About'
import Contact from './Contact/Contact'
import PageNotFound from './PageNotFound'


import ThemeContext from '../UseThemeContext'

export default function App() {
  const {theme, openId, toggleDescription} = useContext(ThemeContext)


  //light
  const themeColor = theme === "light" 
    ? "block text-darkest" 
    : "block text-lightest"
  ;
  const appTheme = theme === "light" ? 'bg-light/30' : 'bg-darkest';

  const layoutTheme = theme === 'light' 
    ? 'bg-lightest border-mid/10' 
    : 'bg-dark/30 border-mid/20'
  ;
  const bodyTxt = theme === "light" ? "text-dark" : "text-light";

  const highLightTxt = `text-brand text-3xl font-semibold text-center`

  const highLightTxtOne = ` 
    leading-loose pb-5 m-auto block
    ${theme === 'light' ? 'text-dark' : 'text-light'} 
     font-inherit mr-auto text-lg font-bold w-max `
  ;
  

  return(
    <div className={`antialiased overflow-x-hidden min-h-screen 
     !scroll-smooth font-OpenSan ${appTheme}  `}
    >
      <Router>
        <Routes>
          <Route path='/' element={
            <Layout 
                themeColor={themeColor}
              />
            }
          >
            <Route index element={
                <Home 
                  theme={theme} 
                  openId={openId} 
                  toggleDescription={toggleDescription}
                  themeColor={themeColor} 
                  layoutTheme={layoutTheme}
                  highLightTxtOne={highLightTxtOne}
                  bodyTxt={bodyTxt}
                  highLightTxt={highLightTxt} 
                />
              }
            />
            <Route 
              path='Works' 
              element={
                <Work 
                  theme={theme} 
                  openId={openId} 
                  toggleDescription={toggleDescription}
                  themeColor={themeColor} 
                  layoutTheme={layoutTheme} 
                  highLightTxtOne={highLightTxtOne}
                  bodyTxt={bodyTxt}
                  highLightTxt={highLightTxt} 
                />
              }
            />
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
