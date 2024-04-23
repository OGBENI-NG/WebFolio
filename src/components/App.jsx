import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home/Home'
import Work from './Work/Work'
import About from './About/About'
import Contact from './Contact/Contact'
import PageNotFound from './PageNotFound'
import data from '../data'


import ThemeContext from '../UseThemeContext'


export default function App() {
  const {theme, openId, toggleDescription} = useContext(ThemeContext)

  //light
  const themeColor = theme === "light" 
    ? "block text-darkest" 
    : "block text-lightest"
  ;
  const appTheme = theme === "light" ? 'bg-[#F5F5F5]' : 'bg-darkest';

  const layoutTheme = theme === 'light' 
    ? 'bg-lightest' 
    : 'bg-dark/30';
  ;
  const bodyTxt = `text-lg ${theme === "light" ? "text-[#717171]" : "text-light/75"}`

  const highLightTxt = `text-brand text-3xl font-semibold text-center`

  const highLightTxtOne = ` 
     m-auto block
    ${theme === 'light' ? 'text-dark' : 'text-light'} 
     font-inherit mr-auto text-lg font-bold `
  ;

  const borderStyle =  theme === "light"
    ? "border border-slate-900/10 text-darkest bg-lightest" 
    : "border border-slate-300/10 bg-darkest text-lightest";
  ;

  const inputFields = [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'email', type: 'email', label: 'Email' },
    { id: 'phone', type: 'tel', label: 'Phone' },
    { id: 'message', type: 'textarea', label: 'Message' }
  ];

  

  return(
    <div className={`antialiased overflow-x-hidden min-h-screen 
     !scroll-smooth font-OpenSan ${appTheme}  `}
    >
      <Router>
        <Routes>
          <Route path='/' element={
            <Layout 
                themeColor={themeColor}
                borderStyle={borderStyle}
              />
            }
          >
            <Route index 
              element={
                <Home 
                  theme={theme} 
                  openId={openId} 
                  toggleDescription={toggleDescription}
                  themeColor={themeColor} 
                  layoutTheme={layoutTheme}
                  highLightTxtOne={highLightTxtOne}
                  bodyTxt={bodyTxt}
                  highLightTxt={highLightTxt} 
                  borderStyle={borderStyle}
                  inputFields={inputFields}
                  data={data}
                />
              }
            />
            <Route 
              path='works' 
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
                  data={data}
                />
              }
            />
            <Route 
              path='about' 
              element={
                <About 
                  bodyTxt={bodyTxt}
                  data={data}
                  theme={theme} 
                  openId={openId} 
                  toggleDescription={toggleDescription}
                  themeColor={themeColor} 
                  layoutTheme={layoutTheme}
                  highLightTxt={highLightTxt}
                  highLightTxtOne={highLightTxtOne}
                />
            }/>
            <Route 
              path='contact' 
              element={
                <Contact 
                  highLightTxt={highLightTxt}
                  highLightTxtOne={highLightTxtOne}
                  data={data}
                  inputFields={inputFields}
                  bodyTxt={bodyTxt}
                  theme={theme}
                  themeColor={themeColor}
                  borderStyle={borderStyle}
                />
              }
            />
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
