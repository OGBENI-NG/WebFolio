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
  toggle
}) {
  const labelColor = theme === 'light' 
    ? 'bg-lightest text-gray-700' 
    : 'bg-darkest text-lightest' 
  ;

  

  const inputStyle = `${borderColor} ${labelColor}
     w-full h-[55px] md:h-[70px] rounded-[8px] 
    outline:none text-lg md:text-2xl px-4 peer placeholder-transparent 
    focus:outline-none font-semibold transition-[.5s] 
    lg:text-lg lg:h-[45px] border-[1px] lg:border-[1.8px]`
  ;

  const labelStyle = `${labelColor} absolute left-2 font-bold -top-6 
    shadow md:-top-8
    text-base md:text-[1.4rem] peer-placeholder-shown:top-[13px]
     md:peer-placeholder-shown:top-[13px] peer-focus:shadow 
    transition-[.5s] peer-focus:-top-6 md:peer-focus:-top-8 
    py-1 px-2 md:py-2 md:px-3 rounded-[6px] peer-placeholder-shown:shadow-none 
    lg:text-[13px] lg:py-0 lg:px-2 lg:-top-5 lg:peer-placeholder-shown:top-[10px]
    lg:peer-focus:-top-4`
  ;

  

  return (
    <form onSubmit={handleSubmit} className={`py-[80px] lg:pt-[20px]  ${className} 
       ${bodyPadding} overflow-hidden`}>
      {showTitle && ( // Render the title only if showTitle is true
        <h1 className={`${highLightTxt}`}>
          Get in touch <span className={`${highLightTxtOne}`}>feel free to contact</span>
        </h1>
      )}

      <div className='lg:grid lg:grid-cols-2 lg:pt-10 xl:max-w-[680px]
        xl:place-content-center xl:m-auto'>
        <img 
          src={contactIllustrator} 
          alt="illustrator"
          className={`lg:w-full lg:h-full lg:pr-4`}
        />
        <div className={`flex flex-col gap-8 md:gap-y-12 pt-2 mt-3 lg:gap-y-5 lg:pt-0
          lg:mt-0 lg:border-l-[1.8px] lg:pl-9 ${borderColor}`}>
          {inputFields.map((field) => (
            <div 
              className="relative w-full" 
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
                    font-semibold transition-[.5s] border-[1.8px]`}
                />
              )}
              <label className={`${labelStyle}`} htmlFor={field.id}>
                {field.label}
              </label>
            </div>
          ))}
          <CustomButton 
            className={`md:-mt-2 lg:-mt-2 py-2 text-lg md:text-2xl lg:text-lg lg:py-1`}
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

