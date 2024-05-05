import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ToggleThemeBtn from '../ToggleThemeBtn'
import hero from '../asset/img/my-pics.png'
import { IoLogOutOutline } from 'react-icons/io5'
import CustomButton from './CustomButton'


export default function NavBar(
  {themeColor, headerNavbarTheme,
  LuSun, HiMoon, toggleTheme,
  theme, data, borderColor,
  toggle, toggleStyle, switchIcon,
  toggleTxtStyle}

  ) {
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

  const hiddenEl = `hidden md:block`

  

  const navBarData = navBarItems.map(item => {
    const isActive = location.pathname === (item.name.toLowerCase() === 'home' 
      ? '/' : `/${item.name.toLowerCase()}`)
    ;
    
    const navbarStyle = `flex flex-col md:flex-row 
      items-center font-OpenSan  md:rounded-xl
      ${toggle ? 'md:px-4 md:py-3 md:mx-3' : 'md:pl-[19px] md:py-3 md:mx-3'} 
     
      text-brand font-extrabold 
      md:hover:bg-brand/20 md:hover:text-brand
      ${isActive 
        ? `before:content-[''] md:bg-brand/15 
            before:w-[60px] md:before:content-none
            before:h-[3.5px] before:absolute before:bg-brand before:-top-[1.1px] 
            before:transition-all before:duration-500` 
        : `${themeColor} md:gap-x-0  before:w-[0px]`
      }`
    ;
    
    const toggleIcon =  `w-6 h-6 ${toggle ? 'md:w-10 md:h-10 ' :'md:h-11 md:w-11'}`

    return (
      <NavLink
        key={item.id}
        to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
        onClick={() => handleIconClick(item.id)}
        className={`w-full`}
      >
        <ul className={`${navbarStyle}`}>
          <li 
            className='py-1 md:p-0 md:pr-6'
            title={item.name}>
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
    <nav className={`${toggleStyle}  overflow-hidden md:overflow-y-scroll lg:overflow-hidden
      ${toggle ? 'animate-none md:animate-fadeOutUp':'animate-none md:animate-fadeInDown'}
      pb-[15px] pt-[8px] fixed bottom-0 w-full z-10 md:left-0
      md:top-[100px] md:pb-0
      ${headerNavbarTheme} border-t-[1px] md:border-r-[3px] `}
    >
      <div className={`flex md:flex-col 
        ${toggle ? 'md:gap-y-8' :'md:gap-2'} md:items-start items-center 
          justify-between md:mt-5 md:border-b-[3px] md:pb-8 
        ${borderColor}
        `}>
        {navBarData}
      </div>
      
      {toggle ? (
        <div className={`${hiddenEl} md:relative
          text-[18px] font-semibold mt-8 
          mx-3 py-3 rounded-xl before:content-[""] lg:rounded-full
          before:top-1 before:w-[90px] 
          before:absolute before:h-[43.8px] before:rounded-lg before:-z-[0]
          before:transition-[1s] before:left-[4px] overflow-hidden
          ${theme === 'light' 
            ? 'bg-light text-darkest before:bg-lightest before:w-[96px] ' 
            : 'bg-dark text-lightest before:bg-darkest before:ml-[95.5px] '
          }`}
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
        ) : (
        <div className={`${hiddenEl} md:py-5 md:border-y-3 ${borderColor}`}>
          <ToggleThemeBtn 
            toggleTheme={toggleTheme}
            className={`w-[44px] h-[44px] md:block md:m-auto `}>
            {switchIcon}
          </ToggleThemeBtn>
        </div>
        
      )}
      {toggle && 
        <div className={`px-4 pt-6 ${hiddenEl}`}>
          <CustomButton 
            theme={theme}
            className={`w-full m-auto md:py-[8px] md:text-xl`}>
            Download CV
          </CustomButton>
        </div>
      }
      
      <div className={`${hiddenEl} px-4 ${borderColor}`}>
        <div className={`m-auto  gap-3 pb-8 pt-6 items-center
          ${toggle ? 'flex flex-wrap mt-8 justify-center' : 'md:flex md:flex-col w-max gap-2'}`}>
          {renderLinksIcon}
        </div>
      </div>

      <div className={`${hiddenEl} border-t-[3px] ${borderColor} 
          md:flex md:items-center md:justify-center 
        ${toggle ? ' md:pt-8 md:pb-24 ' :' md:flex-col md:gap-4 md:pt-6 md:pb-24'} px-4 w-full`}
      >
        <div className={`${themeColor} flex items-center gap-2`}>
          <img 
            className={`w-[44px] h-[44px] border-4 border-brand rounded-full`}
            src={hero} 
            alt="hero" 
          />
          <p 
            className={`text-[22px] pl:2 font-semibold ${toggle ? 'block' :'hidden'}`}
          >
            User
          </p>
        </div>
        <IoLogOutOutline 
          className={`w-[40px] h-[40px]  ${toggle ? ' md:ml-auto' :' md:pl-1'} 
            ${themeColor} cursor-pointer`
        }
        />
      </div>
    </nav>
  )
}
