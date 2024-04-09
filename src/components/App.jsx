import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home/Home'
import Work from './Work/Work'
import About from './About/About'
import Contact from './Contact/Contact'
import PageNotFound from './PageNotFound'


import ThemeContext from '../UseThemeContext'

export default function App() {
  const {theme} = useContext(ThemeContext)

  return(
    <div className={`antialiased overflow-x-hidden min-h-screen !scroll-smooth 
      font-OpenSan 
      ${theme === "light" ? 'bg-white' : 'bg-slate-900'}  `}
    >
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='Works' element={<Work theme={theme}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
