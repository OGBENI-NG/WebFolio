import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Home/Layout'
import Home from './Home/Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import PageNotFound from './PageNotFound'


import ThemeContext from '../UseThemeContext'

export default function App() {
  const {theme} = useContext(ThemeContext)
  

  return(
    <div className={`overflow-x-hidden h-screen
      ${theme === "light" ? 'bg-mainBg' : 'bg-mainBgDark'}  `}
    >
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='Work' element={<Work/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
