import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home/Home'
import Work from './Work/Work'
import About from './About/About'
import Contact from './Contact/Contact'
import PageNotFound from './PageNotFound'
import data from '../data'
import ThemeContext from '../UseThemeContext'
import ScrollToTop from './ScrollPosition'


export default function App() {
  const {theme, openId, toggleDescription,
       toggleTheme, toggle, handleToggleNavbar
  } = useContext(ThemeContext)

  const themeColor = theme === "light" 
    ? "block text-darkest/80" 
    : "block text-lightest/80"
  ;
  const appTheme = theme === "light" ? 'bg-bodyBg' : 'bg-darkest';
  const brandColor = theme === 'light' ? 'text-brand':'text-brandDark'

  const layoutTheme = theme === 'light' 
    ? 'bg-lightest/80' 
    : 'bg-dark/45'
  ;
  
  //main body 
  const bodyTxt = `${theme === "light" ? "text-mid" : "text-light/80"}`

  const highLightTxt = `${brandColor} text-brand text-2xl md:text-[32px] lg:text-3xl font-semibold text-center`

  const highLightTxtOne = ` 
     m-auto block uppercase
    ${theme === 'light' ? 'text-dark' : 'text-light'} 
     leading-normal md:leading-loose mr-auto text-[18px] 
     lg:leading-loose md:text-2xl lg:text-lg font-semibold `
  ;

  //borderColor style
  const borderColor = `${theme === 'light' 
    ? 'border-slate-900/10' 
    : 'border-slate-400/30'
    }
  `;

  const inputFields = [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'email', type: 'email', label: 'Email' },
    { id: 'phone', type: 'tel', label: 'Phone' },
    { id: 'message', type: 'textarea', label: 'Message' }
  ];

  const bodyPadding = ` ${toggle 
    ? `px-5 md:pl-[255px] md:pr-[28px] md:animate-fadeInLeft
     lg:pl-[220px] lg:pr-[40px] xl:pl-[250px] xl:pr-[60px]`
    :`px-5 md:pl-[160px] md:pr-[45px] md:animate-fadeInTop 
    lg:pl-[150px] lg:pr-[50px] xl:pl-[180px] xl:pr-[80px]`}`
  ;

  const formTheme = theme === 'light' ? 'bg-slate-200/90' : 'bg-dark/40';
  

  return(
    <div className={`antialiased overflow-x-hidden min-h-screen 
     !scroll-smooth font-OpenSan   ${appTheme}`}
    >
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={
            <Layout 
                themeColor={themeColor}
                borderColor={borderColor}
                data={data}
                bodyTxt={bodyTxt}
                toggleTheme={toggleTheme}
                theme={theme}
                appTheme={appTheme}
                toggle={toggle}
                handleToggleNavbar={handleToggleNavbar}
                bodyPadding={bodyPadding}
                brandColor={brandColor}
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
                  borderColor={borderColor}
                  inputFields={inputFields}
                  data={data}
                  toggle={toggle}
                  bodyPadding={bodyPadding}
                  formTheme={formTheme}
                  brandColor={brandColor} 
                  
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
                  bodyPadding={bodyPadding}
                  brandColor={brandColor}
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
                  bodyPadding={bodyPadding}
                  brandColor={brandColor}
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
                  borderColor={borderColor}
                  bodyPadding={bodyPadding}
                  formTheme={formTheme}
                  
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
