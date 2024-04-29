import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


export default function NavBar({ themeColor, headerNavbarTheme, LuSun, HiMoon, toggleTheme, theme, data, borderColor, toggle, toggleStyle, toggleTxtStyle}) {
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

  const iconEl = data.footerEl.filter(icon => icon.type === "icon")
  const renderLinksIcon = iconEl.map(iconEl => (
    <div 
      key={iconEl.id} 
      className={`
      ${theme === "light" 
        ? 'bg-darkest/10 text-darkest hover:bg-darkest/20' 
        : ' bg-lightest/10 text-lightest  hover:bg-lightest/20'
      } p-3 rounded-full`}
    >
      <a href={iconEl.live} target='_blank'>{iconEl.icon({size: 25})}</a>
    </div>
  ))

  

  const navBarData = navBarItems.map(item => {
    const isActive = location.pathname === (item.name.toLowerCase() === 'home' 
      ? '/' : `/${item.name.toLowerCase()}`)
    ;
    
    const navbarStyle = `flex flex-col md:flex-row 
      items-center font-OpenSan  md:rounded-xl
      ${toggle ? 'md:px-4 md:py-3 md:mx-3' : 'md:pl-[13.5px] md:py-3 md:mx-3'} 
     
      text-brand font-extrabold md:transition-color
      md:hover:bg-brand/20 md:hover:text-brand
      ${isActive 
        ? `before:content-[''] md:bg-brand/15 
            before:w-[60px] md:before:content-none
            before:h-[3.5px] before:absolute before:bg-brand before:-top-[1.1px] 
            before:transition-all before:duration-500` 
        : `${themeColor} md:gap-x-0  before:w-[0px]`
      }`
    ;
    
    const toggleIcon =  `w-6 h-6 ${toggle ? 'md:w-8 md:h-8 ' :'md:h-14 md:w-14'}`

    return (
      <NavLink
        key={item.id}
        to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
        onClick={() => handleIconClick(item.id)}
        className={`w-full`}
      >
        <ul className={`${navbarStyle}`}>
          <li className='py-1 md:p-0 md:pr-6'>
            {isActive 
              ? <item.isFocusedIcon 
                  className={`${toggleIcon}`} 
                />
              : <item.icon className={`${toggleIcon}`} />
            }
            
          </li>
          <li className={`${toggleTxtStyle} text-[12px] md:text-2xl tracking-wide font-bold`}
          >
            {item.name}
          </li>
        </ul>
      </NavLink>
    )
  })

  return (
    <nav className={`${toggleStyle} 
      pb-[15px] pt-[8px] fixed bottom-0 w-full z-10 md:left-0
      md:top-[100px] 
      ${headerNavbarTheme} border-t-[1px] md:border-r-[3px] `}
    >
      <div className={`flex md:flex-col md:gap-y-8 md:items-start items-center 
        justify-between md:mt-8 md:border-b-[3px] md:pb-8 
        md:transition-all md:duration-300
        ${borderColor}
        `}>
        {navBarData}
      </div>
      <div className={`hidden md:relative md:block 
        ${toggle ? "md:opacity-100" : "md:opacity-0"} text-[18px] 
        font-semibold mt-8 
        mx-3 py-[16px] rounded-xl before:content-[""] lg:rounded-full
        before:top-[4.5px] before:w-[90px] 
        before:absolute before:h-[50px] before:rounded-lg before:-z-[0]
        before:transition-[.3s] before:left-[4.5px]
        ${theme === 'light' 
          ? 'bg-light text-darkest before:bg-lightest before:w-[96px] ' 
          : 'bg-dark text-lightest before:bg-darkest before:ml-[94px] '
        } `}
      >
        <div 
          onClick={toggleTheme} 
          className={` 
           flex justify-center gap-6 relative cursor-pointer`
          }
        >
          <span className='flex items-center gap-1'><LuSun /> Light</span>
          <span className='flex items-center gap-1'><HiMoon/> Dark</span>
        </div>
      </div>
      <div className={`hidden md:block pt-10 border-b-2 ${borderColor}`}>
        <div className='grid m-auto w-max grid-cols-2 gap-4 pb-10'>
          {renderLinksIcon}
        </div>
      </div>
    </nav>
  )
}
