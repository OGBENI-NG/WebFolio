import React from 'react'

export default function HomeFooter({data, footerTheme, bodyTxt}) {

  const iconEl = data.footerEl.filter(icon => icon.type === "icon")
  const renderLinksIcon = iconEl.map(iconEl => (
    <div 
      key={iconEl.id} 
      className='text-brand hover:text-brand/60'
    >
      <a href={iconEl.live} target='_blank'>{iconEl.icon({size: 35})}</a>
    </div>
  ))

  const heroContact = data.footerEl.filter(infoEl => infoEl.type === "info")
  const renderHeroContact = heroContact.map(info => (
    <div 
      key={info.id} 
      className={`${bodyTxt} text-lg font-semibold flex items-center gap-2`}
    >
      <span className=''>{info.iconN({size: 20})}</span>
      <span >{info.name}</span>
    </div>
  ))
  
  return (
    <footer className={`pt-[50px] text-brand pb-[120px]
      ${footerTheme}`}>
      <h1 
        className={`font-Solway text-3xl font-semibold text-center`}
      >
        WebFolio
      </h1>
      <div className='flex flex-col items-center justify-center gap-4 py-10 '>
        {renderHeroContact}
      </div>
      <div className='flex items-center justify-center gap-8'>
        {renderLinksIcon}
      </div>
      <span className={`${bodyTxt} block text-center pt-10 text-xl font-bold`}>&copy; 2024</span>

    </footer>
  )
}
