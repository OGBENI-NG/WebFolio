import React from 'react'
import SocialIcons from './SocialIcons';
import ContactInfo from './ContactInfo';

export default function Footer({data, theme, bodyTxt, bodyPadding, brandColor}) {

  const footerTheme = ` 
    ${theme === "light"? "bg-light/55": "bg-dark/50"}`
  ;
  const linkStyle = theme === 'light' 
    ? 'text-brand/75 hover:text-brand' 
    :' text-brandDark/75 hover:text-brandDark'
  ;
  //fetch links icon from 
  const linkIconEl = data.contactLinkEl.filter(icon => icon.type === "icon")

  const contactInfoEl = data.contactLinkEl.filter(infoEl => infoEl.type === "info")
  
  return (
    <footer className={`pt-[50px] ${brandColor} pb-[120px] md:py-[140px]
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
         <ContactInfo info={contactInfoEl} bodyTxt={bodyTxt}/>
        </div>
        <div className='flex items-center justify-center gap-8 md:gap-12 lg:gap-4 xl:gap-6' >
          <SocialIcons icons={linkIconEl} className={`${linkStyle}`}/>
        </div>
      </div>
      <span className={`${bodyTxt} block text-center md:text-3xl pt-10 md:pt-16 
      text-xl lg:hidden font-bold`}>&copy; 2024</span>

    </footer>
  )
}
