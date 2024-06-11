import React, {useState} from 'react'
import Intro from './Intro'
import HomeWork from './HomeWork'
import SkillsIcons from './SkillsIcons'
import HomeAbout from './HomeAbout'
import ContactForm from '../ContactForm'
import Testimonials from './Testimonial'




export default function Home(
    {theme, openId, toggleDescription, buttonStyle, toggle,
    themeColor, layoutTheme, highLightTxtOne, bodyPadding, borderColor, firebaseData,
    bodyTxt, highLightTxt, borderStyle, data, inputFields, formTheme, brandColor}  
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
        
        bodyTxt={bodyTxt}
        bodyPadding={bodyPadding}
        brandColor={brandColor}
      />
      <SkillsIcons 
        highLightTxtOne={highLightTxtOne}
        theme={theme}
        highLightTxt={highLightTxt}
        bodyTxt={bodyTxt}
        bodyPadding={bodyPadding}
      />
      <HomeAbout
        theme={theme}
        bodyTxt={bodyTxt}
        highLightTxtOne={highLightTxtOne}
        highLightTxt={highLightTxt}
        bodyPadding={bodyPadding}
        toggle={toggle}
        brandColor={brandColor}
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
        brandColor={brandColor}
        firebaseData={firebaseData}
        
      />
      <Testimonials
        data={data}
        theme={theme}
        bodyPadding={bodyPadding}
        highLightTxt={highLightTxt}
        highLightTxtOne={highLightTxtOne}
        layoutTheme={layoutTheme}
        themeColor={themeColor}
        bodyTxt={bodyTxt}
        brandColor={brandColor}
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
        borderColor={borderColor}
        contactClass={`lg:w-[600px] lg:m-auto`}
        className={`${theme === 'light' ? 'bg-lightest' : 'bg-darkest/15'}`}
        
      />
    </main>
  )
}
