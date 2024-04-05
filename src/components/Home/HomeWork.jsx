import React from 'react'
import { NavLink } from 'react-router-dom'
import Section from '../Section'

export default function SelectedWork(
  {data, themeColor, linkColor, layoutTheme, centerTxt, hoverColor}
  ) {
 

  

  const SelectedWorkEl = data.workEl.slice(0, 4)
  const renderSelectedWork = SelectedWorkEl.map((item, index) => (
    <div 
      key={item.id} 
      className={`${index === SelectedWorkEl.length - 1 ? 'pb-0' : 'pb-6'}`}
    >
      <Section>
      <div>
        <img src={item.image} alt="work-icon" />
      </div>
      <div className={`flex items-center py-3 px-4 text-xl 
       ${layoutTheme} backdrop-blur-[100px] 
       font-bold ${themeColor}`}
      >
        <a 
          href={item.live} 
          target='_blank'
          className={`${hoverColor}`}
          title="work-name"
        >
          {item.name}
        </a>
        <a 
          href={item.gitRepository} 
          target='_blank'
          className='ml-auto text-brand hover:text-brand/50'
          title="github-link"
        >
          {item.gitIcon({size: 40, })}
        </a>
      </div>
      </Section>
    </div>
  ))

  
  return (
    
    <div className=' mt-[20px] relative z-[1]'>
      <Section>
        <h2 className={`${centerTxt} pb-6 m-auto`}>
          My works Examples
        </h2>
      </Section>
      {renderSelectedWork}
      <NavLink 
        to="works" 
        className={`${linkColor} bg-red-600 text-mainBg
        text-lg ml-auto py-3 font-bold block w-max
          px-4 shadow rounded-bl-md`}
      >
        More works
      </NavLink>
    </div>
    
  )
}
