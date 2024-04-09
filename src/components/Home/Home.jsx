import React, {useContext, useState} from 'react'
import Intro from './Intro'
import logoIllustration from '../../asset/img/intro-illtra.svg'
import logoIllusDark from '../../asset/img/intro-illus-dark.svg'
import frameLogo from '../../asset/img/frame.svg'
import ThemeContext from '../../UseThemeContext'
import HomeWork from './HomeWork'
import data from '../../data'
import SkillsIcons from './SkillsIcons'
import HomeAbout from './HomeAbout'
import HomeContact from './HomeContact'
import HomeFooter from './HomeFooter'


export default function Home() {
  const {theme} = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData('')
  }


  const switchIllustration = theme === "light" 
    ? logoIllustration
    : logoIllusDark
  ;

  const layoutTheme = theme === 'light' 
    ? 'bg-[#E1E1E1] border-borderColor' 
    : 'bg-[#363636] border-[#5F5F5F]'
  ;

  const themeColor = theme === "light" 
    ? "block text-primary" 
    : "block text-primaryDark"
  ;

  const formTheme = theme === "light" 
    ? "bg-slate-400/10":"bg-slate-800"
  ;

  const inputColor = theme === "light"
   ? "border border-slate-900/10 border-primary text-primary bg-white"
   : "border border-slate-300/10 bg-slate-900/40 text-primaryDark"
  ;

  const labelColor = theme === "light"
    ? "peer-placeholder-shown:bg-white text-primary"
    : "peer-placeholder-shown:bg-slate-900/40 text-mainBg"
  ;
  const bodyTxt = theme === "light" ? "text-secondary" : "text-secondaryDark"

  const centerTxt = ` ${themeColor} font-Solway text-2xl font-bold w-max`

  const linkColor = theme === "light" 
    ? "hover:text-red-700 hover:bg-red-500/30 hover:underline" 
    : "hover:bg-[#363636] hover:underline"
  ;

  const hoverColor = theme === "light"
    ? "hover:text-primary/60"
    : "hover:text-primaryDark/60"

 

  return (
    <main>
      <Intro 
        switchIllustration={switchIllustration}
        theme={theme}
        themeColor={themeColor}
        frameLogo={frameLogo}
        bodyTxt={bodyTxt}
      />
      <SkillsIcons 
        themeColor={themeColor}
        theme={theme}
      />
      <HomeWork
        data={data}
        themeColor={themeColor}
        layoutTheme={layoutTheme}
        centerTxt={centerTxt}
        linkColor={linkColor}
        hoverColor={hoverColor}
      />
      <HomeAbout
        theme={theme}
        themeColor={themeColor}
        bodyTxt={bodyTxt}
        centerTxt={centerTxt}
      />
      <HomeContact
        centerTxt={centerTxt}
        formTheme={formTheme}
        inputColor={inputColor}
        labelColor={labelColor}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
      <HomeFooter 
        data={data}
        themeColor={themeColor}
      />
    </main>
  )
}
