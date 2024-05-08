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
  toggle, toggleNavWidth, switchIcon,
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
  const socialIcons = iconEl.map(iconEl => (
    <div 
      key={iconEl.id} 
      className={`
      ${theme === "light" 
        ? 'bg-darkest/10 text-darkest hover:bg-darkest/20' 
        : ' bg-lightest/10 text-lightest  hover:bg-lightest/20'
      } p-3 lg:p-2 rounded-full`}
    >
      <a href={iconEl.live} target='_blank'>
        <iconEl.icon className="text-[25px] lg:text-[16px] xl:text-lg" />
      </a>
    </div>
  ))

  const hiddenEl = `hidden md:block`
  const lightDarkStyle = `flex items-center gap-1 lg:gap-x-[8px] xl:gap-x-[4px]`

  const navBarData = navBarItems.map(item => {
    
    const isActive = location.pathname === (item.name.toLowerCase() === 'home' 
      ? '/' : `/${item.name.toLowerCase()}`)
    ;
    
    const navbarStyle = `flex flex-col md:flex-row 
      items-center font-OpenSan md:rounded-xl
      text-brand font-extrabold lg:justify-start 
      md:hover:bg-brand/20 md:hover:text-brand md:py-3 lg:py-2
      ${isActive 
        ? `before:content-[''] md:bg-brand/15 
            before:w-[60px] md:before:content-none
            before:h-[3.5px] before:absolute before:bg-brand before:-top-[1.1px] 
            before:transition-[1s]` 
        : `${themeColor} md:gap-x-0 before:w-[0px]`
      }`
    ;
    
    const toggleIcon = `w-6 h-6 
      ${toggle 
        ? 'md:w-10 md:h-10 lg:w-7 lg:h-7 xl:h-8' 
        :'md:h-11 md:w-11 lg:w-7 lg:h-7 lg:h-8'
      }`
    ;

    return (
      <NavLink
        key={item.id}
        to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
        onClick={() => handleIconClick(item.id)}
        className={`w-full`}
      >
        <div className={`md:px-4 lg:px-3 xl:px-5`}>
          <ul className={`${navbarStyle}`}>
            <li 
              className={`'py-1  ${toggle ? 'md:px-4 lg:px-3 lg:pr-5 xl:px-4':' md:mx-auto'}`}
              title={item.name}>
              {isActive 
                ? <item.isFocusedIcon className={`${toggleIcon}`} 
                  />
                : <item.icon className={`${toggleIcon}`} />
              }
              
            </li>
            <li className={`${toggleTxtStyle} 
              text-[12px] md:text-2xl lg:text-lg tracking-wide font-bold
              xl:text-xl`}
            >
              {item.name}
            </li>
          </ul>
        </div>
      </NavLink>
    )
  })

  return (
    <nav className={`${toggleNavWidth}  overflow-hidden md:overflow-y-scroll no-scrollbar
      ${toggle ? 'animate-none md:animate-fadeOutUp':'animate-none md:animate-fadeInDown'}
      pb-[15px] pt-[8px] fixed bottom-0 w-full z-10 md:left-0
      md:top-[100px] md:pb-0 lg:top-[70px] lg:pt-[10px]
      xl:top-[100px] 
      ${headerNavbarTheme} border-t-[1px] md:border-r-[3px] `}
    >
      <div className={`flex md:flex-col 
        ${toggle ? 'md:gap-y-8 lg:gap-y-2 xl:gap-y-4' :'md:gap-y-2'} md:items-start items-center 
          justify-between md:mt-5 md:border-b-[3px] md:pb-8 
        ${borderColor}
        `}>
        {navBarData}
      </div>
      
      {toggle ? (
        <div className={`${hiddenEl} md:relative
          text-[18px] lg:text-[12px] font-semibold mt-8 
          mx-3 py-3 rounded-xl before:content-[""]
          before:inset-[4px] before:w-[95px] 
          before:absolute before:h-[43.8px] before:rounded-lg before:-z-[0]
          before:transition-[1s]
          lg:before:w-[72px] lg:before:h-[35.9px] lg:mx-4 lg:before:inset-[3px]
          lg:rounded-[8px] lg:before:rounded-[6px] lg:mt-
          xl:mx-5 xl:text-[17px] xl xl:before:w-[88px] xl:before:h-[43px]
          ${theme === 'light' 
            ? 'bg-light text-darkest before:bg-lightest' 
            : `bg-dark text-lightest before:bg-darkest 
              before:ml-[95.5px] lg:before:ml-[67px] lg:before:w-[68px] l xl:before:ml-[82px]`
          }`}
        >
          <div 
            onClick={toggleTheme} 
            className={`flex item-center px-4 lg:px-3 xl:px-4 relative cursor-pointer`}
          >
            <span className={`${lightDarkStyle} ${theme === 'dark' && 'text-lightest/40'}`}><LuSun /> Light</span>
            <span className={`${lightDarkStyle} ${theme === 'light' && 'text-darkest/60'} ml-auto`}><HiMoon/> Dark</span>
          </div>
        </div>
        ) : (
        <div className={`${hiddenEl} md:py-5 md:border-y-3 ${borderColor}`}>
          <ToggleThemeBtn 
            toggleTheme={toggleTheme}
            className={`w-[44px] h-[44px] lg:w-7 lg:h-7 md:block md:m-auto`}>
            {switchIcon}
          </ToggleThemeBtn>
        </div>
        
      )}
      {toggle && 
        <div className={`px-4 pt-6 lg:pt-3 ${hiddenEl}`}>
          <CustomButton 
            theme={theme}
            className={`w-full m-auto md:py-[8px] md:text-xl lg:text-base lg:py-1 xl:py-2`}>
            Download CV
          </CustomButton>
        </div>
      }
      
      <div className={`${hiddenEl} px-4 ${borderColor}`}>
        <div className={`m-auto  gap-4 pb-8  pt-4 items-center
          ${toggle 
            ? 'flex flex-wrap mt-8 justify-center' 
            : 'md:flex md:flex-col w-max gap-2'
          }`}>
          {socialIcons}
        </div>
      </div>

      <div className={`px-4 w-full ${hiddenEl} border-t-[3px] ${borderColor} 
          md:flex md:items-center md:justify-center lg:pb-6
        ${toggle 
          ? ' md:pt-8 md:pb-24 lg:pb-10 xl:pt-12' 
          :' md:flex-col md:gap-4 md:pt-6 md:pb-24'
        } `}
      >
        <div className={`${themeColor} flex items-center gap-2`}>
          <img 
            className={`w-[44px] h-[44px] lg:w-[35px] lg:h-[35px] border-4
             border-brand rounded-full xl:w-[50px] xl:h-[50px]`}
            src={hero} 
            alt="hero" 
          />
          <p 
            className={`text-[22px] lg:text-lg xl:text-xl pl:2 font-semibold 
            ${toggle ? 'block' :'hidden'}`}
          >
            User
          </p>
        </div>
        <IoLogOutOutline 
          className={`text-4xl  lg:text-3xl xl:text-4xl ${toggle ? ' md:ml-auto' :' md:pl-1'} 
            ${themeColor} cursor-pointer`
        }
        />
      </div>
    </nav>
  )
}
