import React from 'react'

export default function HomeContact({centerTxt, formTheme, inputColor, labelColor}) {
  const inputStyle = `${inputColor}
    w-full h-[50px] rounded-[8px] outline:none 
    text-lg px-3 peer placeholder-transparent 
    focus:outline-none font-semibold transition-all transition-colors`
  ;

    const labelStyle = `${labelColor} absolute left-2 font-bold
     -top-5 text-lg  peer-placeholder-shown:top-[6px]  
     peer-focus:-top-5 py-1 px-2 rounded-[6px] transition-all transition-colors`


  return (
    <form id='form' className={`py-[100px] ${formTheme} `}>
      <h1 className={`text-2xl font-bold leading-relaxed pb-5 text-brand m-auto text-center`}>
        Get in touch
        <span className={`m-auto ${centerTxt}`}>feel free to contact </span>
      </h1>

      <div className='divide-y flex flex-col gap-8 px-4 py-6'>
        <div className='relative'>
          <input 
            type='text' 
            id='name' 
            placeholder='not-shown'
            className={`${inputStyle}`}
          />
          <label 
            
            className={`${labelStyle}`}
            htmlFor='name'>Name</label>
        </div>
        <div className='relative'>
          <input 
            type='email' 
            id='email' 
            placeholder='not-shown'
            className={`${inputStyle}`}
          />
          <label 
          className={`${labelStyle}`}
          htmlFor='email'>Email</label>
        </div>
        <div className='relative'>
          <input 
            type='tel' 
            id='phone' 
            placeholder='not-shown'
            className={`${inputStyle}`}
          />
          <label 
          className={`${labelStyle}`}
          htmlFor='phone'>Phone</label>
        </div>
        <div className='relative'>
          <textarea 
            id='text-area' 
            placeholder='not-shown'
            className={`${inputStyle} p-4 resize-none h-[150px]`}
          />
          <label 
          className={`${labelStyle}`}
          htmlFor='text-area'>Message</label>
        </div>
        <button 
          type='submit'
          className={`bg-primary p-4 text-xl text-mainBg rounded-lg`}
        >Submit</button>
      </div>
    </form>
  )
}
