import React from 'react';
import contactIllustrator from '../asset/img/contact-us.svg'; // Import the contact illustration image

import CustomButton from './CustomButton'; // Import the custom button component

export default function ContactForm({
  highLightTxt, // CSS class for the highlighted text
  highLightTxtOne, // CSS class for another highlighted text
  formData, // Form data object
  handleChange, // Function to handle input changes
  handleSubmit, // Function to handle form submission
  theme, // Theme of the form (light or dark)
  borderColor, // CSS class for the border color
  inputFields, // Array of input fields
  className, // Additional CSS classes for the form
  showTitle = true, // Boolean to show or hide the title
  bodyPadding, // Padding for the form body
  contactClass // Additional CSS classes for the contact section
}) {
  // Determine the label color based on the theme
  const labelColor = theme === 'light' 
    ? 'bg-lightest text-gray-700' 
    : 'bg-darkest text-lightest';

  // CSS styles for input elements
  const inputStyle = `${borderColor} ${labelColor}
    w-full h-[55px] md:h-[70px] rounded-[8px] 
    outline:none text-lg md:text-2xl px-4 peer placeholder-transparent 
    focus:outline-none font-semibold transition-[.5s] 
    lg:text-base lg:h-[40px] border-[1px] lg:border-[1px]`;

  // CSS styles for label elements
  const labelStyle = `${labelColor} absolute left-2 font-bold -top-6 
    shadow md:-top-8
    text-base md:text-[1.4rem] peer-placeholder-shown:top-[13px]
    md:peer-placeholder-shown:top-[13px] peer-focus:shadow 
    transition-[.5s] peer-focus:-top-6 md:peer-focus:-top-8 
    py-1 px-2 md:py-2 md:px-3 rounded-[6px] peer-placeholder-shown:shadow-none 
    lg:text-[12px] lg:py-0 lg:px-2 lg:-top-4 lg:peer-placeholder-shown:top-[8px]
    lg:peer-focus:-top-4`;

  return (
    <form onSubmit={handleSubmit} className={`py-[100px] lg:py-[80px] ${className} ${bodyPadding} overflow-hidden`}>
      <div className='pb-4 lg:pb-0'>
        {showTitle && ( // Render the title only if showTitle is true
          <h1 className={`${highLightTxt}`}>
            Get in touch <span className={`${highLightTxtOne}`}>feel free to contact</span>
          </h1>
        )}
      </div>

      <div className={`lg:grid lg:grid-cols-2 lg:place-items-center lg:pt-10 lg:w-[700px] ${contactClass}`}>
        {/* Contact illustration */}
        <img 
          src={contactIllustrator} 
          alt="illustrator"
          className={`lg:w-[380px] h-auto lg:pr-10 pb-4 lg:pb-0`}
        />
        
        <div className={`flex flex-col gap-8 md:gap-y-12 pt-2 mt-3 lg:gap-y-6 lg:pt-0 lg:mt-0 lg:border-l-[1.5px] lg:pl-[50px] ${borderColor}`}>
          {inputFields.map((field) => (
            <div className="relative lg:w-[295px]" key={field.id}>
              {/* Render input or textarea based on the field type */}
              {field.type !== 'textarea' ? (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder="not-shown"
                  autoComplete="off"
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`${inputStyle}`}
                />
              ) : (
                <textarea
                  id={field.id}
                  placeholder="not-shown"
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`${borderColor} ${labelColor} w-full h-[158px] lg:h-[120px] rounded-[8px]
                  outline:none text-lg md:text-2xl lg:text-lg p-4 peer leading-tight
                    placeholder-transparent resize-none md:resize-y focus:outline-none 
                    font-semibold transition-[.5s] border-[1px]`}
                />
              )}
              {/* Label for the input or textarea */}
              <label className={`${labelStyle}`} htmlFor={field.id}>
                {field.label}
              </label>
            </div>
          ))}
          {/* Custom submit button */}
          <CustomButton 
            className={`md:-mt-2 lg:-mt-2 py-2 md:py-3 text-lg md:text-2xl lg:text-lg lg:py-1`}
            type={'submit'}
            theme={theme}
          >
            Submit
          </CustomButton>
        </div>
      </div>
    </form>
  );
}
