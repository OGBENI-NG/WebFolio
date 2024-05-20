import React from 'react';
import contactIllustrator from '../asset/img/contact-us.svg'

import CustomButton from './CustomButton';

export default function ContactForm({
  highLightTxt,
  highLightTxtOne,
  formData,
  handleChange,
  handleSubmit,
  theme,
  borderColor,
  inputFields,
  className,
  showTitle = true,
  bodyPadding,
  contactClass
}) {
  const labelColor = theme === 'light' 
    ? 'bg-lightest text-gray-700' 
    : 'bg-darkest text-lightest' 
  ;

  

  const inputStyle = `${borderColor} ${labelColor}
     w-full h-[55px] md:h-[70px] rounded-[8px] 
    outline:none text-lg md:text-2xl px-4 peer placeholder-transparent 
    focus:outline-none font-semibold transition-[.5s] 
    lg:text-base lg:h-[40px] border-[1px] lg:border-[1px]`
  ;

  const labelStyle = `${labelColor} absolute left-2 font-bold -top-6 
    shadow md:-top-8
    text-base md:text-[1.4rem] peer-placeholder-shown:top-[13px]
     md:peer-placeholder-shown:top-[13px] peer-focus:shadow 
    transition-[.5s] peer-focus:-top-6 md:peer-focus:-top-8 
    py-1 px-2 md:py-2 md:px-3 rounded-[6px] peer-placeholder-shown:shadow-none 
    lg:text-[12px] lg:py-0 lg:px-2 lg:-top-4 lg:peer-placeholder-shown:top-[8px]
    lg:peer-focus:-top-4 `
  ;

  

  return (
    <form onSubmit={handleSubmit} className={`py-[100px] lg:py-[80px]  ${className} 
       ${bodyPadding} overflow-hidden`}>
      {showTitle && ( // Render the title only if showTitle is true
        <h1 className={`${highLightTxt}`}>
          Get in touch <span className={`${highLightTxtOne}`}>feel free to contact</span>
        </h1>
      )}

      <div className={`lg:grid lg:grid-cols-2 lg:place-items-center 
        lg:pt-10 lg:w-[700px] ${contactClass}`}>
        <img 
          src={contactIllustrator} 
          alt="illustrator"
          className={`lg:w-[380px] lg:h-full lg:pr-10`}
        />
        <div className={`flex flex-col gap-8 md:gap-y-12 pt-2 mt-3 lg:gap-y-6 lg:pt-0
          lg:mt-0 lg:border-l-[1.5px] lg:pl-[50px] ${borderColor}`}>
          {inputFields.map((field) => (
            <div 
              className="relative lg:w-[295px]" 
              key={field.id}
            >
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
              <label className={`${labelStyle}`} htmlFor={field.id}>
                {field.label}
              </label>
            </div>
          ))}
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

