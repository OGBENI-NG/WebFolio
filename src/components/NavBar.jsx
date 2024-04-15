import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import data from '../data'

export default function NavBar({ themeColor, headerNavbarTheme, visible }) {
  const [navBarItems, setNavBarItems] = useState(data.navBarEl)
  const location = useLocation()

  const handleIconClick = (id) => {
    const updatedItems = navBarItems.map(item => {
      if (item.id === id) {
        return { ...item, isTrue: true }
      } else {
        return { ...item, isTrue: false }
      }
    })
    setNavBarItems(updatedItems)
  }

  const navBarData = navBarItems.map(item => {
    const isActive = location.pathname === (item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`)

    const navbarStyle = `flex flex-col gap-[2px] items-center font-OpenSan 
      ${isActive 
      ? `text-brand font-extrabold before:content-[''] before:w-[60px] 
        before:h-[3.5px] before:absolute before:bg-brand before:-top-[1.1px] 
        before:transition-all duration-300` 
      : `${themeColor} before:w-[0px]` } transition-all duration-300`
    ;

    return (
      <NavLink
        key={item.id}
        to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
        className={`${navbarStyle}`}
        onClick={() => handleIconClick(item.id)}
      >
        <div>
          {isActive ? item.isFocusedIcon({ size: 24 }) : item.icon({ size: 24 })}
        </div>
        <span className={`text-[12px] tracking-wide font-bold`}
        >
          {item.name}
        </span>
      </NavLink>
    )
  })

  return (
    <nav className={`flex items-center justify-between
     ${visible ? "pb-[20px] opacity-100" : "pb-[2px] opacity-25"} 
     pt-[6px] fixed bottom-0 w-full z-50 
     ${headerNavbarTheme} border-t-[1px]`}
    >
      {navBarData}
    </nav>
  )
}
