import React from 'react'
import SocialIcons from './components/SocialIcons';
import ContactInfo from './components/ContactInfo';

export default function Footer({data, theme, bodyTxt, bodyPadding}) {

  const footerTheme = ` 
  ${theme === "light"? "bg-lightest": "bg-dark/20"}` 
;

  //fetch links icon from 
  const linkIconEl = data.contactLinkEl.filter(icon => icon.type === "icon")

  const contactInfoEl = data.contactLinkEl.filter(infoEl => infoEl.type === "info")
  
  return (
    <footer className={`pt-[50px] text-brand pb-[120px] md:py-[140px]
      ${footerTheme} ${bodyPadding} m-auto lg:py-[100px]`}>
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
          <SocialIcons icons={linkIconEl} className={`text-brand hover:text-brand/60`}/>
        </div>
      </div>
      <span className={`${bodyTxt} block text-center md:text-3xl pt-10 md:pt-16 
      text-xl lg:hidden font-bold`}>&copy; 2024</span>

    </footer>
  )
}
