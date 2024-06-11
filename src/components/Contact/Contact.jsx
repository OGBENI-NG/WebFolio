import React, { useState } from 'react';
import ContactForm from '../ContactForm'; // Importing ContactForm component
import ContactInfo from '../ContactInfo'; // Importing ContactInfo component
import SocialIcons from '../SocialIcons'; // Importing SocialIcons component

// Define the Contact functional component
export default function Contact(
  { 
    data, // Data for contact information and icons
    bodyTxt, // Body text color and styling
    themeColor, // Theme color for titles and headings
    theme, // Theme mode (light/dark)
    inputFields, // Fields for the contact form
    borderStyle, // Border style for elements
    bodyPadding, // Padding for the body section
    formTheme, // Theme for the contact form
    borderColor, // Border color for elements
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

  // Extracting contact information from data
  const contactInfo = data.contactLinkEl.filter(infoEl => infoEl.type === "info");

  // Extracting social icons from data
  const socialIconEl = data.contactLinkEl.filter(icon => icon.type === "icon");

  return (
    <section className={`py-[125px] lg:pt-[80px] text-center ${bodyPadding}`}>
      <div className='xl:px-[80px]'>
        {/* Contact Title */}
        <h1 className={`text-[30px] md:text-[40px] lg:text-3xl font-bold ${brandColor}`}>Contact us</h1>
        {/* Contact Description */}
        <p className={`${bodyTxt} md:text-2xl lg:text-base leading-snug 
          font-medium w-[230px] md:w-[400px] lg:w-[200px] pt-4 m-auto`}>
          Any question or remarks? Just write us a message!
        </p>

        <div className={`${formTheme} p-[6px] md:p-[7px] rounded-[8px] mt-10 
          lg:mt-16 lg:pb-12`}
        >
          {/* Contact Information */}
          <div className={`overflow-hidden p-4 md:p-8 lg:p-16 rounded-t-[5px]
            ${theme === 'light' ? 'bg-lightest' : 'bg-darkest'}`}
          >
            <h2 className={`text-xl md:text-3xl lg:text-2xl font-bold pb-2 md:pb-3 lg:pb-1 ${themeColor}`}>Contact information</h2>
            <p className={`${bodyTxt} md:text-2xl lg:text-base font-medium`}>Say something to start a live chat!</p>
            <div>
              <div className='flex flex-col items-center lg:flex-row lg:gap-12 
                justify-center gap-8 py-12 lg:py-16'
              >
                {/* Render ContactInfo component */}
                <ContactInfo 
                  info={contactInfo} 
                  className={`${bodyTxt} text-lg md:text-2xl lg:text-base 
                  font-semibold flex flex-col items-center gap-1 md:gap-0 lg:flex-row lg:gap-[3px]`}
                />
              </div>
              <div className='flex items-center justify-center pt-5 gap-4 md:gap-6 lg:gap-8'>
                {/* Render SocialIcons component */}
                <SocialIcons 
                  icons={socialIconEl}
                  iconSize={`text-[20px] md:text-xl lg:text-xl`}
                  className={`
                    ${theme === "light" 
                      ? 'bg-darkest/10 text-darkest hover:bg-darkest/20' 
                      : ' bg-lightest/10 text-lightest hover:bg-lightest/20'
                    } p-2 md:p-5 lg:p-3 rounded-full`}
                />
              </div>
            </div>
          </div>
          {/* Render ContactForm component */}
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            theme={theme}
            borderStyle={borderStyle}
            inputFields={inputFields}
            className={`pt-8 pb-6 px-[14px] md:px-[10px] bg-none`}
            showTitle={false}
            borderColor={borderColor}
            contactClass={`lg:w-[600px] lg:m-auto`}
          />
        </div>
      </div>
    </section>
  )
}
