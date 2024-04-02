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
    ? "bg-[#ECECEC]":"bg-[#232323]"
  ;

  const inputColor = theme === "light"
   ? "border-[1.5px] border-primary text-primary bg-[#e1e1e1]"
   : "border-none bg-[#333333] text-primaryDark"
  ;

  const labelColor = theme === "light"
    ? "bg-[#e1e1e1] text-primary":"bg-[#333333] text-mainBg"
  ;
  const bodyTxt = theme === "light" ? "text-secondary" : "text-secondaryDark"

  const centerTxt = ` ${themeColor} font-Solway text-2xl font-bold w-max`

  const linkColor = theme === "light" 
    ? "hover:text-red-700 hover:bg-red-500/30 hover:underline" 
    : "hover:bg-[#363636] hover:underline"
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
        themeColor={themeColor}
        theme={theme}
      />
      <HomeWork
        data={data}
        themeColor={themeColor}
        layoutTheme={layoutTheme}
        centerTxt={centerTxt}
        linkColor={linkColor}
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
