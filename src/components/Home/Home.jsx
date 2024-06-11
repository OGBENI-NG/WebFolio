import React, { useState } from 'react';
import Intro from './Intro'; // Importing Intro component
import HomeWork from './HomeWork'; // Importing HomeWork component
import SkillsIcons from './SkillsIcons'; // Importing SkillsIcons component
import HomeAbout from './HomeAbout'; // Importing HomeAbout component
import ContactForm from '../ContactForm'; // Importing ContactForm component
import Testimonials from './Testimonial'; // Importing Testimonials component

// Define the Home functional component
export default function Home(
  {
    theme, // Theme mode (light/dark)
    openId, // ID of the open item
    toggleDescription, // Function to toggle description
    buttonStyle, // Style for buttons
    toggle, // Toggles the state
    themeColor, // Theme color for titles and headings
    layoutTheme, // Layout theme
    highLightTxtOne, // Styling for highlighted text
    bodyPadding, // Padding for the body section
    borderColor, // Border color for elements
    firebaseData, // Data from Firebase
    bodyTxt, // Body text color and styling
    highLightTxt, // Styling for highlighted text
    borderStyle, // Border style for elements
    data, // Data for the component
    inputFields, // Fields for the contact form
    formTheme, // Theme for the contact form
    brandColor // Brand color for titles and headings
  }
) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Function to clear form fields after submission
  const clearFormFields = () => {
    const emptyFormData = Object.fromEntries(Object.keys(formData).map(key => [key, '']));
    setFormData(emptyFormData);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFormFields();
  };

  return (
    <main>
      {/* Render Intro component */}
      <Intro
        theme={theme}
        themeColor={themeColor}
        bodyTxt={bodyTxt}
        bodyPadding={bodyPadding}
        brandColor={brandColor}
      />
      {/* Render SkillsIcons component */}
      <SkillsIcons
        highLightTxtOne={highLightTxtOne}
        theme={theme}
        highLightTxt={highLightTxt}
        bodyTxt={bodyTxt}
        bodyPadding={bodyPadding}
      />
      {/* Render HomeAbout component */}
      <HomeAbout
        theme={theme}
        bodyTxt={bodyTxt}
        highLightTxtOne={highLightTxtOne}
        highLightTxt={highLightTxt}
        bodyPadding={bodyPadding}
        toggle={toggle}
        brandColor={brandColor}
      />
      {/* Render HomeWork component */}
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
      {/* Render Testimonials component */}
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
      {/* Render ContactForm component */}
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
