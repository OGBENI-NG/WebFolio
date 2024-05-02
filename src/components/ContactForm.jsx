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
  btnStyle,
  bodyPadding
}) {
  const labelColor = theme === 'light' 
    ? 'bg-lightest text-darkest' 
    : 'bg-darkest text-lightest' 
  ;

  const inputTheme = `${theme === 'light' ? 'text-darkest bg-lightest' : 'bg-darkest text-lightest'}`

  const inputColor = `${borderColor} ${inputTheme}
     w-full h-[55px] rounded-[8px] 
    outline:none text-lg px-4 peer placeholder-transparent 
    focus:outline-none font-semibold transition-all duration-500`
  ;

  const labelStyle = `${labelColor} absolute left-2 font-bold -top-5 shadow 
    text-lg peer-placeholder-shown:top-[8px] peer-focus:shadow 
    transition-all duration-500 peer-focus:-top-6 py-1 px-2 rounded-[6px] peer-placeholder-shown:shadow-none `
  ;

  const formTheme = theme === 'light' ? 'bg-light/40' : 'bg-dark/20';

  return (
    <form onSubmit={handleSubmit} className={`py-[80px]  ${className} 
      ${formTheme} ${bodyPadding} overflow-x-hidden`}>
      {showTitle && ( // Render the title only if showTitle is true
        <h1 className={`${highLightTxt}`}>
          Get in touch <span className={`${highLightTxtOne}`}>feel free to contact</span>
        </h1>
      )}

      <div className="flex flex-col gap-8 pt-2 mt-3">
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
                className={`${borderColor} ${inputTheme} w-full h-[158px] rounded-[8px] outline:none text-lg p-4 peer leading-tight placeholder-transparent resize-none focus:outline-none font-semibold transition-all`}
              />
            )}
            <label className={`${labelStyle}`} htmlFor={field.id}>
              {field.label}
            </label>
          </div>
        ))}
        <CustomButton className={`py-2 -mt-3 ${btnStyle}`} type={'submit'}>
          Submit
        </CustomButton>
      </div>
    </form>
  );
}

