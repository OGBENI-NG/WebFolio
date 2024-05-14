import React from 'react'

export default function Footer({data, theme, bodyTxt, bodyPadding}) {

  const footerTheme = ` 
  ${theme === "light"? "bg-lightest": "bg-dark/20"}` 
;

  const iconEl = data.footerEl.filter(icon => icon.type === "icon")
  const renderLinksIcon = iconEl.map(iconEl => (
    <div 
      key={iconEl.id} 
      className='text-brand hover:text-brand/60'
    >
      <a href={iconEl.live} className="text-3xl md:text-6xl lg:text-3xl" target='_blank'>
        <iconEl.icon /></a>
    </div>
  ))

  const heroContact = data.footerEl.filter(infoEl => infoEl.type === "info")
  const renderHeroContact = heroContact.map(iconInfo => (
    <div 
      key={iconInfo.id} 
      className={`${bodyTxt} text-lg md:text-[1.7rem] lg:text-base xl:text-[14px]
        font-semibold flex items-center gap-2 md:gap-3`
      }
    >
      <iconInfo.iconN className='text-lg md:text-2xl lg:text-xl xl:text-lg'/>
      <span >{iconInfo.name}</span>
    </div>
  ))
  
  return (
    <footer className={`pt-[50px] text-brand pb-[120px] md:py-[140px]
      ${footerTheme} ${bodyPadding} m-auto lg:py-[80px]`}>
      <div className='lg:grid lg:grid-cols-3 lg:place-items-start lg:gap-12'>
        <div className='lg:flex lg:flex-col gap-12 leading-none'>
          <h1 
            className={`font-Solway text-3xl md:text-4xl lg:text-3xl font-semibold text-center`}
          >
            WebFolio
          </h1>
          <span className={`hidden lg:block ${bodyTxt} lg:text-xl font-bold`}>&copy; 2024</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 md:gap-10 py-10 md:py-20
          lg:p-0 lg:gap-5 lg:items-start'>
          {renderHeroContact}
        </div>
        <div className='flex items-center justify-center gap-8 md:gap-12 lg:gap-8' >
          {renderLinksIcon}
        </div>
      </div>
      <span className={`${bodyTxt} block text-center md:text-3xl pt-10 md:pt-16 
      text-xl lg:hidden font-bold`}>&copy; 2024</span>

    </footer>
  )
}
