import React, {useState} from 'react'
import Intro from './Intro'


import frameLogo from '../../asset/img/frame.svg'
import HomeWork from './HomeWork'
import SkillsIcons from './SkillsIcons'
import HomeAbout from './HomeAbout'
import ContactForm from '../ContactForm'
import LogoAnim from '../../LogoAnim'
//import HomeFooter from './HomeFooter'


export default function Home(
    {theme, openId, toggleDescription, buttonStyle, toggle,
    themeColor, layoutTheme, highLightTxtOne, bodyPadding,
    bodyTxt, highLightTxt, borderStyle, data, inputFields, formTheme}  
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

  return (
    <main>
      
      <Intro 
        theme={theme}
        themeColor={themeColor}
        frameLogo={frameLogo}
        bodyTxt={bodyTxt}
        bodyPadding={bodyPadding}
      />
      <SkillsIcons 
        highLightTxtOne={highLightTxtOne}
        theme={theme}
        highLightTxt={highLightTxt}
        bodyTxt={bodyTxt}
        bodyPadding={bodyPadding}
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
        bodyPadding={bodyPadding}
        buttonStyle={buttonStyle}
        theme={theme}
        
      />
      <HomeAbout
        theme={theme}
        bodyTxt={bodyTxt}
        highLightTxtOne={highLightTxtOne}
        highLightTxt={highLightTxt}
        bodyPadding={bodyPadding}
        toggle={toggle}
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
        bodyPadding={bodyPadding}
        buttonStyle={buttonStyle}
        formTheme={formTheme}
        toggle={toggle}
        
      />
    </main>
  )
}
