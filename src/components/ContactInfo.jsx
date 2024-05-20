import React from 'react'

export default function ContactInfo({info, bodyTxt, className}) {
  return (
    <>
      {info.map(infoData => (
        <div 
          key={infoData.id} 
          className={`${bodyTxt}  text-lg md:text-[1.7rem] lg:text-base xl:text-[14px]
            font-semibold flex items-center gap-2 md:gap-3 ${className}`
          }
        >
          <infoData.iconN className='text-lg md:text-2xl lg:text-xl xl:text-lg'/>
          <span >{infoData.name}</span>
        </div>
      ))}
    </>
  )
}
