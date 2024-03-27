import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SelectedWork({data, themeColor, layoutTheme, centerTxt}) {


  const hoverColor = `hover:text-[#607681] hover:underline`

  const SelectedWorkEl = data.workEl.slice(0, 4)
  const renderSelectedWork = SelectedWorkEl.map((item, index) => (
    <div 
      key={item.id} 
      className={`${index === SelectedWorkEl.length - 1 ? 'pb-4' : 'pb-14'}`}
    >
      <div>
        <img src={item.image} alt="work-icon" />
      </div>
      <div className={`flex items-center py-3 px-5 text-xl 
       ${layoutTheme} backdrop-blur-[100px] border-b-[1px] 
       font-bold ${themeColor}`}
      >
        <a 
          href={item.live} 
          target='_blank'
          className={`${hoverColor}`}
        >
          {item.name}
        </a>
        <a 
          href={item.gitRepository} 
          target='_blank'
          className='ml-auto text-brand'
        >
          {item.gitIcon({size: 40})}
        </a>
      </div>
    </div>
  ))

  
  return (
    <section className='pb-[0px] mt-[20px] relative z-[1]'>
      <h2 className={`${centerTxt} pb-6`}>
        My works Examples
      </h2>
      {renderSelectedWork}
      <NavLink 
        to="works" 
        className={`${centerTxt} ${hoverColor} underline text-lg`}
      >
        More works
      </NavLink>
    </section>
  )
}
