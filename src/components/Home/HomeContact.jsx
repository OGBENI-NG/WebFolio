import React from 'react'
import Section from '../AnimateSections';

export default function HomeContact(
  {centerTxt, formTheme, inputColor, 
    labelColor, formData, handleChange, handleSubmit}
  ) {

  const inputStyle = `${inputColor}
    w-full h-[55px] rounded-[8px] outline:none 
    text-lg px-4 peer placeholder-transparent 
    focus:outline-none font-semibold transition-all duration-300`
  ;

  const labelStyle = `${labelColor} absolute left-2 font-bold
    -top-5 text-lg peer-placeholder-shown:top-[8px] backdrop-blur
    peer-focus:shadow transition-all duration-300 
    peer-focus:-top-6 py-1 px-2 rounded-[6px] `
  ;

  return (
    
    <form 
      onSubmit={handleSubmit} 
      id='form' 
      className={`py-[100px] transition-[.5s] ${formTheme} overflow-x-hidden`}
    >
      <h1 className={`text-2xl font-bold leading-relaxed 
        pb-8 text-brand m-auto text-center`}
      >
        Get in touch
        <span className={`m-auto ${centerTxt}`}>feel free to contact </span>
      </h1>

      <div className='flex flex-col gap-8 px-4'>
        <div className='relative'>
          <input 
            type='text' 
            id='name' 
            placeholder='not-shown'
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
            className={`${inputStyle}`}
          />
          <label 
            className={`${labelStyle}`}
            htmlFor='name'>Name
          </label>
        </div>
        <div className='relative'>
          <input 
            type='email' 
            id='email' 
            placeholder='not-shown'
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
            className={`${inputStyle}`}
          />
          <label 
            className={`${labelStyle}`}
            htmlFor='email'>Email
          </label>
        </div>
        <div className='relative'>
          <input 
            type='tel' 
            id='phone' 
            placeholder='not-shown'
            autoComplete="off"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputStyle}`}
          />
          <label 
            className={`${labelStyle}`}
            htmlFor='phone'>Phone
          </label>
        </div>
        <div className='relative m-0 p-0'>
          <textarea 
            id='message' 
            placeholder='not-shown'
            value={formData.message}
            onChange={handleChange}
            className={`${inputColor}
            w-full h-[158px] rounded-[8px] outline:none 
            text-lg p-4 peer leading-tight placeholder-transparent resize-none
            focus:outline-none font-semibold transition-all`}
          />
          <label 
            className={`${labelStyle}`}
            htmlFor='text-area'>Message
          </label>
        </div>
        <button 
          type='submit'
          className={`shadow-lg shadow-brand/25 p-4 text-xl text-mainBg 
          hover:bg-transparent hover:border hover:border-brand bg-brand
          rounded-lg -mt-3 font-bold transition-all duration-300
          hover:text-brand`}
        >Submit</button>
      </div>
    </form>
  )
}
