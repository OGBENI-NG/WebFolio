import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ToggleThemeBtn from './ToggleThemeBtn';
import hero from '../asset/img/hero.png';
import { IoLogOutOutline } from 'react-icons/io5';
import CustomButton from './CustomButton';
import SocialIcons from './SocialIcons';

// Export the NavBar component with props
export default function NavBar({
  themeColor, // Color scheme for the theme (light or dark)
  headerNavbarTheme, // Styling for the header navbar
  LuSun, // Icon for light theme
  HiMoon, // Icon for dark theme
  toggleTheme, // Function to toggle between light and dark themes
  theme, // Current theme (light or dark)
  data, // Data object containing navigation and contact link elements
  borderColor, // Border color for the navbar
  toggle, // Boolean to toggle the navbar width
  toggleNavWidth, // Function to toggle the navbar width
  switchIcon, // Icon to switch between light and dark themes
  toggleTxtStyle, // Styling for the toggle text
}) {
  // Initialize state for navbar items using the data.navBarEl property
  const [navBarItems, setNavBarItems] = useState(data.navBarEl);
  const location = useLocation();

  // Handle icon click event to update the isTrue property of the clicked item
  const handleIconClick = (id) => {
    const updatedItems = navBarItems.map(item => {
      if (item.id === id) {
        return { ...item, isTrue: true };
      } else {
        return { ...item, isTrue: false };
      }
    });
    setNavBarItems(updatedItems);
  };

  // Fetch social icons from data
  const socialIcon = data.contactLinkEl.filter(icon => icon.type === "icon");
  const visibleSocialIcons = toggle ? socialIcon : socialIcon.slice(0, socialIcon.length - 2);

  // Hidden elements in mobile devices
  const hiddenEl = `hidden md:block`;

  // Light and dark theme styles for desktop mode
  const lightDarkStyle = `flex items-center gap-1 xxl:gap-2`;

  // Fetch navigation data from data
  const navBarData = navBarItems.map(item => {
    // Set focus style on current route
    const isActive = location.pathname === (item.name.toLowerCase() === 'home'
      ? '/'
      : `/${item.name.toLowerCase()}`);
    // Navbar styles
    const navbarStyle = `flex flex-col items-center justify-center md:flex-row
      ${theme === 'light' 
        ? 'md:text-dark md:hover:bg-dark/20' 
        : 'md:text-lightest md:hover:bg-dark/55'
      }
      font-OpenSan md:rounded-[5px]
      font-extrabold 
      ${toggle ? 'md:pl-4 md:justify-start' :'md:m-auto lg:justify-center'}
      
      ${isActive
        ? `before:content-['']
          ${theme === 'light' ? 'text-brand md:bg-dark/20' : 'text-brandDark md:bg-dark/55'}
            before:w-[60px] md:before:content-none
            before:h-[4px] before:absolute 
            ${theme === 'light' ? 'before:bg-brand' : 'before:bg-brandDark'}
             before:bg-brand before:-top-[1.1px]
            before:transition-[1s]`
        : `md:gap-x-0 before:w-[0px] ${theme === 'light' ? 'text-dark' : 'text-lightest'}`
      }`
    ;

    // Set focus between active routes style changes
    const toggleIcon = `text-2xl
      ${toggle ? 'md:text-[35px] lg:text-2xl xl:text-lg' : 'md:text-[40px] lg:text-lg'}
    `;

    return (
      <NavLink
      key={item.id}
      to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
      onClick={() => handleIconClick(item.id)}
      className={`w-full`}
    >
      <div className={`md:px-4  ${toggle ? '' : 'lg:px-4 '}`}>
        <ul className={`${navbarStyle}`}>
          <li
            data-tooltip={toggle ? null : item.name}
            className={`py-[2px] md:py-2 lg:py-[7px] relative 
              ${toggle ? 'md:mr-3' : `md:mr-0 lg:px-[17px] xl:px-4  
            lg:hover:before:content-[attr(data-tooltip)]
            lg:hover:before:absolute lg:hover:before:left-[60px] lg:hover:before:top-1/2
            lg:hover:before:-translate-y-1/2 lg:hover:before:p-2 lg:hover:before:py-[7px]
            lg:hover:before:text-[12px] lg:hover:before:font-semibold lg:hover:before:rounded-[5px] lg:hover:before:whitespace-nowrap
            lg:hover:after:content-['']
            lg:hover:after:absolute lg:hover:after:left-[54px] lg:hover:after:top-1/2
            lg:hover:after:-translate-y-1/2 lg:hover:after:border-[6px] lg:hover:after:border-transparent
            lg:hover:after:border-l-0`}
           
            ${theme === 'light' 
              ? 'md:hover:before:bg-dark/20 md:hover:before:text-dark lg:hover:after:border-r-dark/20'
              : 'md:hover:before:bg-dark/55 md:hover:before:text-lightest lg:hover:after:border-r-dark/55'}`}
          >
            {isActive
              ? <item.isFocusedIcon className={`${toggleIcon}`} />
              : <item.icon className={`${toggleIcon}`} />
            }
          </li>
          <li className={`${toggleTxtStyle}
            text-[12px] md:text-[22px] lg:text-base tracking-wide font-bold
            xl:text-[14px]`}>
            {item.name}
          </li>
        </ul>
      </div>
    </NavLink>


    );
  });

  return (
    <nav
      // conditional class names based on toggleNavWidth, toggle, and headerNavbarTheme
      className={`${toggleNavWidth} no-scrollbar overflow-y-scroll  
      ${toggle ? 'animate-none md:animate-fadeOutUp lg:overflow-y-auto' : 'animate-none md:animate-fadeInDown lg:overflow-visible'}
      pb-[15px] pt-[8px] fixed bottom-0 w-full h-auto z-10 md:z-0 md:left-0 rounded-tr-lg
      md:top-[99px] md:pb-0 lg:top-[79px] lg:pt-[12px]
      xl:top-[69px] xxl:top-[80px]
      ${headerNavbarTheme} border-t-[1px] md:border-r-[1.8px] md:border-t-[1.8] 
      lg:border-t-[1.5] lg:border-r-[1.5px]`}
    >
      {/* navbar links to routes */}
      <div className={`flex md:flex-col md:gap-y-7 lg:gap-y-4
         md:items-start items-center lg:border-b-[1.5px] md:pb-8 lg:pb-4 
        justify-between md:mt-5 lg:mt-4 md:border-b-[1.8px] 
        ${borderColor}`}>
        {navBarData}
      </div>
      {/* toggle light and dark desktop slider styles */}
      <div className={`${hiddenEl} px-4 xxl:p-8 ${toggle ? 'md:py-8 lg:py-5':'md:py-0'} 
        border-b-[1.5px] ${borderColor}`}
      >
        {toggle ? (
          <div className={`relative -z-[0] md:p-4 lg:py-[10px] xl:py-2 xl:px-1 lg:px-[7px] 
            rounded-lg xxl:p-3
             ${theme === 'light'
              ? 'bg-light/65 text-darkest'
              : `bg-dark/60 text-lightest`
            }`}>
              <div className={`absolute transition-[1s] -z-[999] rounded-md 
                top-1 left-1 lg:top-[3px] lg:left-[2.5px] h-[48px] w-[90px] lg:h-[38.5px] lg:w-[66px]
                xl:h-[34.5px] xxl:w-[90px] xxl:h-[41.5px]
                ${theme === 'light' ? 'bg-lightest':`bg-darkest ml-[94px] lg:ml-[75.5px]
                  xxl:ml-[89px]
                `} `}></div>
            <div
              onClick={toggleTheme}
              className={`flex item-center text-base lg:text-[13px] xl:text-[11px] 
              lg:gap-1 lg:px-1 xl:px-[10px] xxl:text-[15px] cursor-pointer`}>
              <span className={`${lightDarkStyle} ${theme === 'dark' && 'text-lightest/40'}`}><LuSun /> Light</span>
              <span className={`${lightDarkStyle} ${theme === 'light' && 'text-darkest/60'} ml-auto`}><HiMoon /> Dark</span>
            </div>
          </div>
        ) : (
          <div className={`${hiddenEl} md:py-5 lg:py-4  m-auto`}>
            <ToggleThemeBtn
              toggleTheme={toggleTheme}
              className={`text-[40px] lg:text-lg md:block m-auto`}>
              {switchIcon}
            </ToggleThemeBtn>
          </div>
        )}
        {/* CV button style */}
        {toggle &&
          <div className={`pt-6 lg:pt-5 ${hiddenEl}`}>
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
        <div className={`m-auto gap-4 lg:gap-2 xxl:gap-3 items-center 
          ${toggle
            ? 'flex flex-wrap justify-center py-8 lg:py-6'
            : 'md:flex md:flex-col w-max gap-3 py-8 lg:py-4'
          }`}>
          <SocialIcons
            icons={visibleSocialIcons}
            className={`hover:bg-brandDark/50 
            ${theme === "light"
              ? 'bg-dark/15 text-darkest'
              : ' bg-dark/40 text-lightest '
            } p-3 lg:p-2 rounded-full`}
            iconSize={`md:text-xl lg:text-sm`}
          />
        </div>
      </div>
      <div className={`w-full ${hiddenEl} border-t-[1.8px] lg:border-t-[1.5px]
        ${borderColor}  ${toggle
            ? 'px-4 xxl:px-8  md:py-6 lg:py-5 xl:py-5 xxl:py-8'
            : 'px-4 md:py-6'
          }
         `}
      >
        <p className={`${themeColor} text-center 
        ${toggle ? 'py-[70px] lg:py-[50px] xl:py-[50px]':'md:py-[40px] lg:py-[30px] xl:py-[50px] xxl:py-[40px]'} 
         border-[1.5px] xlMd:hidden
          ${borderColor} font-bold`}>ad here
        </p>
        <div className={` flex items-center  ${toggle
            ? 'md:gap-8 md:pt-8 lg:pt-8 xl:pt-10'
            : 'md:flex-col md:justify-center md:gap-6 lg:gap-6 md:pt-6 lg:pt-7 xl:pt-8'
          }`}>
          <div className={`${themeColor}  flex items-center justify-center gap-2`}>
            <img
              className={`w-[44px] h-[44px] lg:w-[25px] lg:h-[25px] border-2 lg:border-1
              border-brand rounded-full`}
              src={hero}
              alt="hero"
            />
            <p
              className={`text-[22px] lg:text-lg font-semibold 
              ${toggle ? 'block' : 'hidden'}`}>
              User
            </p>
          </div>
          <div className={`cursor-pointer
            ${toggle ? 'text-4xl lg:text-3xl ml-auto' : 'md:text-4xl lg:text-2xl md:m-auto'} 
            ${themeColor} `}
          >
            <IoLogOutOutline/>
          </div>
        </div>
      </div>
    </nav>
  );
}
