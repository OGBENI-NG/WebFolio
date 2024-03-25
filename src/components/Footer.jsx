import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import data from '../data'

export default function Footer({ themeColor, layoutTheme }) {
  const [footerItems, setFooterItems] = useState(data.footerEl)
  const location = useLocation()

  const handleIconClick = (id) => {
    const updatedItems = footerItems.map(item => {
      if (item.id === id) {
        return { ...item, isTrue: true }
      } else {
        return { ...item, isTrue: false }
      }
    })
    setFooterItems(updatedItems)
  }

  const footerData = footerItems.map(item => {
    const isActive = location.pathname === (item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`)

    const classNames = `flex flex-col gap-[3px] items-center font-OpenSan 
      ${isActive ? 'text-brand font-extrabold' : themeColor} transition-all`
    ;

    return (
      <NavLink
        key={item.id}
        to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
        className={classNames}
        onClick={() => handleIconClick(item.id)}
      >
        <div>
          {isActive ? item.isFocusedIcon({ size: 28 }) : item.icon({ size: 28 })}
        </div>
        <span className="text-[14px] font-bold">{item.name}</span>
      </NavLink>
    )
  })

  return (
    <footer className={`flex items-center justify-between
     py-[10px] px-5 fixed bottom-0 right-0 left-0
     ${layoutTheme } border-t-[1px] backdrop-blur-[100px] `}
    >
      {footerData}
    </footer>
  )
}
