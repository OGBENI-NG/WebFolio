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

  const footerTheme = ` 
    ${theme === "light"? "bg-lightest": "bg-darkest"}` 
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
        bodyTxt={bodyTxt}
        highLightTxtOne={highLightTxtOne}
        highLightTxt={highLightTxt}
      />
      <HomeContact
        highLightTxtOne={highLightTxtOne}
        theme={theme}
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
        bodyTxt={bodyTxt}
      />
    </main>
  )
}
