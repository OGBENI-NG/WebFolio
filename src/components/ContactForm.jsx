import React from 'react';

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
  buttonStyle,
  bodyPadding
}) {
  const labelColor = theme === 'light' 
    ? 'bg-lightest text-gray-700' 
    : 'bg-darkest text-lightest' 
  ;

  

  const inputColor = `${borderColor} ${labelColor}
     w-full h-[55px] md:h-[70px] rounded-[8px] 
    outline:none text-lg md:text-2xl px-4 peer placeholder-transparent 
    focus:outline-none font-semibold transition-[.5s]`
  ;

  const labelStyle = `${labelColor} absolute left-2 font-bold -top-5 
    shadow md:-top-8
    text-lg md:text-[1.4rem] peer-placeholder-shown:top-[8px]
     md:peer-placeholder-shown:top-[13px] peer-focus:shadow 
    transition-[.5s] peer-focus:-top-6 md:peer-focus:-top-8 
    py-1 px-2 md:py-2 md:px-3 rounded-[6px] peer-placeholder-shown:shadow-none `
  ;

  const formTheme = theme === 'light' ? 'bg-light' : 'bg-dark';

  return (
    <form onSubmit={handleSubmit} className={`py-[80px]  ${className} 
      ${formTheme} ${bodyPadding} overflow-hidden`}>
      {showTitle && ( // Render the title only if showTitle is true
        <h1 className={`${highLightTxt}`}>
          Get in touch <span className={`${highLightTxtOne}`}>feel free to contact</span>
        </h1>
      )}

      <div className="flex flex-col gap-8 md:gap-y-12 pt-2 mt-3">
        {inputFields.map((field) => (
          <div className="relative" key={field.id}>
            {field.type !== 'textarea' ? (
              <input
                type={field.type}
                id={field.id}
                placeholder="not-shown"
                autoComplete="off"
                value={formData[field.id]}
                onChange={handleChange}
                className={`${inputColor}`}
              />
            ) : (
              <textarea
                id={field.id}
                placeholder="not-shown"
                value={formData[field.id]}
                onChange={handleChange}
                className={`${borderColor} ${labelColor} w-full h-[158px] rounded-[8px] outline:none text-lg md:text-2xl p-4 peer leading-tight placeholder-transparent resize-none focus:outline-none font-semibold transition-[.5s]`}
              />
            )}
            <label className={`${labelStyle}`} htmlFor={field.id}>
              {field.label}
            </label>
          </div>
        ))}
        <CustomButton 
          className={`md:-mt-2`}
          type={'submit'}
          theme={theme}
        >
          Submit
        </CustomButton>
      </div>
    </form>
  );
}

