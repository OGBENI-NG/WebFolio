import React, {useState} from 'react'
import Intro from './Intro'
import logoIllustration from '../../asset/img/intro-illtra.svg'
import logoIllusDark from '../../asset/img/intro-illus-dark.svg'
import frameLogo from '../../asset/img/frame.svg'
import HomeWork from './HomeWork'
import SkillsIcons from './SkillsIcons'
import HomeAbout from './HomeAbout'
import ContactForm from '../ContactForm'
import HomeFooter from './HomeFooter'


export default function Home(
    {theme, openId, toggleDescription, 
    themeColor, layoutTheme, highLightTxtOne, 
    bodyTxt, highLightTxt, borderStyle, data, inputFields}  
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

  
  const clearFormFields = () => {
    const emptyFormData = Object.fromEntries(Object.keys(formData).map(key => [key, '']));
    setFormData(emptyFormData);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFormFields();
     
  };

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
      <ContactForm
        highLightTxt={highLightTxt}
        highLightTxtOne={highLightTxtOne}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        theme={theme}
        borderStyle={borderStyle}
        inputFields={inputFields}
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
