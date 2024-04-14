import React, {useContext, useState} from 'react'
import Intro from './Intro'
import logoIllustration from '../../asset/img/intro-illtra.svg'
import logoIllusDark from '../../asset/img/intro-illus-dark.svg'
import frameLogo from '../../asset/img/frame.svg'
import HomeWork from './HomeWork'
import data from '../../data'
import SkillsIcons from './SkillsIcons'
import HomeAbout from './HomeAbout'
import HomeContact from './HomeContact'
import HomeFooter from './HomeFooter'


export default function Home(
    {theme, openId, toggleDescription, 
    themeColor, layoutTheme, highLightTxtOne, 
    bodyTxt, highLightTxt}  
  ) {

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

  

  const formTheme = theme === "light" 
    ? "bg-slate-400/10":"bg-slate-800"
  ;

  const inputColor = theme === "light"
   ? "border border-slate-900/10 text-primary bg-white"
   : "border border-slate-300/10 bg-slate-900/80 text-primaryDark"
  ;

  const labelColor = theme === "light"
    ? "peer-placeholder-shown:bg-white text-primary"
    : "peer-placeholder-shown:bg-slate-900/50 text-mainBg"
  ;
  

  

  const footerTheme = theme === "light"
    ? "bg-slate-800"
    : "bg-slate-700/20"
  ;

 
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
        highLightTxtOne={highLightTxtOne}
        theme={theme}
        highLightTxt={highLightTxt}
        bodyTxt={bodyTxt}
      />
      <HomeWork
        data={data}
        themeColor={themeColor}
        layoutTheme={layoutTheme}
        highLightTxtOne={highLightTxtOne}
        bodyTxt={bodyTxt}
        toggleDescription={toggleDescription}
        openId={openId}
        highLightTxt={highLightTxt}
      />
      <HomeAbout
        theme={theme}
        themeColor={themeColor}
        bodyTxt={bodyTxt}
        highLightTxtOne={highLightTxtOne}
        highLightTxt={highLightTxt}
      />
      <HomeContact
        highLightTxtOne={highLightTxtOne}
        formTheme={formTheme}
        inputColor={inputColor}
        labelColor={labelColor}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        highLightTxt={highLightTxt}
        bodyTxt={bodyTxt}
      />
      <HomeFooter 
        data={data}
        themeColor={themeColor}
        footerTheme={footerTheme}
      />
    </main>
  )
}
