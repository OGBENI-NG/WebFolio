import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import data from '../data'

export default function NavBar({ themeColor, layoutTheme, visible }) {
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
      ? `text-brand font-extrabold before:content-[''] before:w-[50px] 
        before:h-[2.5px] before:absolute before:bg-brand before:top-0 
        before:transition-[.5s]` 
      : `${themeColor} before:w-[0px]` } transition-[.5s]`
    ;

    return (
      <NavLink
        key={item.id}
        to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
        className={`${navbarStyle}`}
        onClick={() => handleIconClick(item.id)}
      >
        <div>
          {isActive ? item.isFocusedIcon({ size: 25 }) : item.icon({ size: 25 })}
        </div>
        <span className={`text-[14px] font-bold`}>{item.name}</span>
      </NavLink>
    )
  })

  return (
    <nav className={`flex items-center justify-between
     pb-[15px] pt-[4px] px-5 fixed bottom-0 w-full z-50 transition-[.5s]
     ${layoutTheme} border-t-[1px] backdrop-blur-[100px] 
     ${visible ? "opacity-100" : "opacity-30"}`}
    >
      {navBarData}
    </nav>
  )
}
