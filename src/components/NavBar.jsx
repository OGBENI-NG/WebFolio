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
        <iconEl.icon className="text-[25px] lg:text-xl xl:text-[20px]" />
      </a>
    </div>
  ))

  const hiddenEl = `hidden md:block`
  const lightDarkStyle = `flex items-center gap-1 lg:gap-x-[8px] xl:gap-x-[4px]`

  const navBarData = navBarItems.map(item => {
    
    const isActive = location.pathname === (item.name.toLowerCase() === 'home' 
      ? '/' : `/${item.name.toLowerCase()}`)
    ;
  
    //navbar styles
    const navbarStyle = `flex flex-col md:flex-row 
    ${theme === 'light' 
      ? 'md:text-dark md:hover:bg-dark/20'
      :'md:text-lightest md:hover:bg-lightest/10'}
      items-center font-OpenSan md:rounded-[8px]
       font-extrabold lg:justify-start 
       md:py-3 lg:py-2
      ${isActive 
        ? `before:content-[''] text-brand  
          ${theme === 'light' ? ' md:bg-dark/20' : 'text md:bg-lightest/10'}
            before:w-[60px] md:before:content-none
            before:h-[3.5px] before:absolute before:bg-brand before:-top-[1.1px] 
            before:transition-[1s]` 
        : `md:gap-x-0 before:w-[0px] ${theme === 'light' ? 'text-dark' : 'text-lightest'}`
      }`
    ;
    
    //set focus between active routes
    const toggleIcon = `text-2xl 
      ${toggle 
        ? 'md:text-[44px] lg:text-2xl xl:text-lg' 
        :'md:text-[45px] lg:text-3xl '
      }`
    ;

    return (
      //Navbar navigation routes home, work, about and contact
      <NavLink
        key={item.id}
        to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
        onClick={() => handleIconClick(item.id)}
        className={`w-full`}
      >
        <div className={`md:px-4 ${toggle ? ' lg:px-4 xl:px-6':' lg:px-[17px] xl:px-4'} `}>
          <ul className={`${navbarStyle}`}>
            <li 
              className={`py-[2px] ${toggle ? 'md:px-4 lg:px-3 lg:pr-5 xl:pl-4 xl:pr-2':' md:mx-auto'}`}
              title={item.name}>
              {isActive 
                ? <item.isFocusedIcon className={`${toggleIcon}`} 
                  />
                : <item.icon className={`${toggleIcon}`} />
              }
              
            </li>
            <li className={`${toggleTxtStyle} 
              text-[12px] md:text-2xl lg:text-base tracking-wide font-bold
              xl:text-base`}
            >
              {item.name}
            </li>
          </ul>
        </div>
      </NavLink>
    )
  })

  return (
    //navigation style
    <nav className={`${toggleNavWidth}  overflow-hidden md:overflow-y-scroll no-scrollbar
      ${toggle ? 'animate-none md:animate-fadeOutUp':'animate-none md:animate-fadeInDown'}
      pb-[15px] pt-[8px] fixed bottom-0 w-full z-10 md:left-0
      md:top-[100px] md:pb-0 lg:top-[80px] lg:pt-[12px]
      xl:top-[70px] 
      ${headerNavbarTheme} border-t-[1px] md:border-t-0 md:border-r-[1.8px] `}
    >
      {/* navbar links to routes */}
      <div className={`flex md:flex-col xl:gap-y-4
        ${toggle ? 'md:gap-y-8 lg:gap-y-4 ' :'md:gap-y-2'} md:items-start items-center 
          justify-between md:mt-5 md:border-b-[1.8px] md:pb-8 
        ${borderColor}
        `}>
        {navBarData}
      </div>
      {/* toggle light and dark desktop slider styles */}
      <div className='px-3 lg:px-4 xl:px-6'>
        {toggle ? (
          <div className={`${hiddenEl} md:relative
            text-[18px] lg:text-[12px] font-semibold mt-8 
             py-4 lg:py-3 rounded-xl before:content-[""]
            before:inset-[4px] before:w-[95px] 
            before:absolute before:h-[51px] before:rounded-lg before:-z-[0]
            before:transition-[1s]
            lg:before:w-[72px] lg:before:h-[36.8px] lg:before:inset-[2.5px]
            lg:rounded-[8px] lg:before:rounded-[6px]
             xl:before:w-[60px]
            ${theme === 'light' 
              ? 'bg-light text-darkest before:bg-lightest' 
              : `bg-dark text-lightest before:bg-darkest 
                before:ml-[96px] lg:before:ml-[69.5px] lg:before:w-[68px] xl:before:ml-[65.5px]`
            }`}
          >
            <div 
              onClick={toggleTheme} 
              className={`flex item-center px-4 lg:px-3 xl:px-[10px] relative cursor-pointer`}
            >
              <span className={`${lightDarkStyle} ${theme === 'dark' && 'text-lightest/40'}`}><LuSun /> Light</span>
              <span className={`${lightDarkStyle} ${theme === 'light' && 'text-darkest/60'} ml-auto`}><HiMoon/> Dark</span>
            </div>
          </div>
          ) : (
          <div className={`${hiddenEl} md:py-5`}>
            <ToggleThemeBtn 
              toggleTheme={toggleTheme}
              className={`text-[44px] lg:text-4xl xl:text-[35px] md:block md:m-auto`}>
              {switchIcon}
            </ToggleThemeBtn>
          </div>
        )}

        {/* cv BTN style */}
        {toggle && 
          <div className={`pt-6 lg:pt-5  ${hiddenEl}`}>
            <CustomButton 
              theme={theme}
              className={`w-full m-auto md:py-[8px] lg:py-1 md:text-lg lg:text-[14px]`}>
              Download CV
            </CustomButton>
          </div>
        }
      </div>

      {/* social icon styles */}
      <div className={`cursor-pointer ${hiddenEl} px-4 xl:px-2 ${borderColor}`}>
        <div className={`m-auto gap-4 pb-8 pt-4 items-center
          ${toggle 
            ? 'flex flex-wrap mt-8 justify-center' 
            : 'md:flex md:flex-col w-max gap-2'
          }`}>
          {socialIcons}
        </div>
      </div>

      <div className={`px-4 w-full ${hiddenEl} border-t-[1.8px] ${borderColor} 
          md:flex md:items-center md:justify-center md:pt-10 md:pb-8
           
        ${toggle 
          ? 'md:gap-8 lg:py-8 xl:py-14 ' 
          :'md:flex-col md:gap-6'
        } `}
      >
        <div className={`${themeColor} flex items-center gap-2`}>
          <img 
            className={`w-[44px] h-[44px] lg:w-[35px] lg:h-[35px] border-2
             border-brand rounded-full `}
            src={hero} 
            alt="hero" 
          />
          <p 
            className={`text-[22px] lg:text-lg pl:2 font-semibold 
            ${toggle ? 'block' :'hidden'}`}
          >
            User
          </p>
        </div>
       <div>
       <IoLogOutOutline 
          className={`text-4xl lg:text-3xl ${toggle ? ' md:ml-auto' :'md:text-5xl md:pl-1 lg:text-4xl'} 
            ${themeColor} cursor-pointer`
        }
        />
       </div>
      </div>
    </nav>
  )
}
