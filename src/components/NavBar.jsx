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
  const lightDarkStyle = `flex items-center gap-1 lg:gap-x-[8px] xl:gap-x-[4px]`;

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
       font-OpenSan md:rounded-[8px]
      font-extrabold 
      ${toggle ? 'md:pl-4 md:justify-start' :'md:m-auto lg:justify-center'}
      md:py-3 lg:py-2
      ${isActive
        ? `before:content-['']
          ${theme === 'light' ? 'text-brand md:bg-dark/20' : 'text-brandDark md:bg-dark/55'}
            before:w-[60px] md:before:content-none
            before:h-[4px] before:absolute 
            ${theme === 'light' ? 'before:bg-brand' : 'before:bg-brandDark'}
             before:bg-brand before:-top-[1.1px]
            before:transition-[1s]`
        : `md:gap-x-0 before:w-[0px]  ${theme === 'light' ? 'text-dark' : 'text-lightest'}`
      }`
    ;

    // Set focus between active routes style changes
    const toggleIcon = `text-2xl
      ${toggle ? 'md:text-[35px] lg:text-2xl xl:text-lg' : 'md:text-[40px] lg:text-lg '}
    `;

    return (
      <NavLink
  key={item.id}
  to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
  onClick={() => handleIconClick(item.id)}
  className={`w-full`}
>
  <div className={`md:px-4 ${toggle ? 'lg:px-3 xxl:px-7' : 'lg:px-[17px] xl:px-4'}`}>
    <ul className={`${navbarStyle}`}>
      <li
        data-tooltip={!toggle && item.name}
        className={`py-[2px] relative ${toggle ? 'md:mr-3' : 'md:mr-0'}
        md:hover:before:content-[attr(data-tooltip)]
        md:hover:before:absolute md:hover:before:left-[50px] md:hover:before:top-1/2
        md:hover:before:-translate-y-1/2 md:hover:before:px-4 md:hover:before:py-2
        md:hover:before:text-[12px] md:hover:before:rounded-md md:hover:before:whitespace-nowrap
        md:hover:before:transition-opacity md:hover:before:duration-300
        md:hover:before:opacity-100
        md:hover:after:content-['']
        md:hover:after:absolute md:hover:after:left-[42px] md:hover:after:top-1/2
        md:hover:after:-translate-y-1/2 md:hover:after:border-[8px] md:hover:after:border-transparent
        md:hover:after:border-l-0
        ${theme === 'light' 
          ? 'md:hover:before:bg-dark/20 md:hover:before:text-dark md:hover:after:border-r-dark/20'
          : 'md:hover:before:bg-dark/55 md:hover:before:text-lightest md:hover:after:border-r-dark/55'}`}
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
      className={`${toggleNavWidth} no-scrollbar   
      ${toggle ? 'animate-none md:animate-fadeOutUp overflow-y-auto' : 'animate-none md:animate-fadeInDown overflow-visible'}
      pb-[15px] pt-[8px] fixed bottom-0 w-full z-10 md:z-0 md:left-0 rounded-tr-lg
      md:top-[98px] md:pb-0 lg:top-[78px] lg:pt-[12px]
      xl:top-[68px]
      ${headerNavbarTheme} border-t-[1px] md:border-t-0 md:border-[1.8px] lg:border-[1.5px]`}
    >
      <div className=''>
      {/* navbar links to routes */}
      <div className={`flex md:flex-col xl:gap-y-4 
        ${toggle ? 'md:gap-y-8 lg:gap-y-4 xl:gap-y-3' : 'md:gap-y-2'} md:items-start items-center 
        justify-between md:mt-5 lg:mt-4 md:border-b-[1.8px] lg:border-b-[1.5px] md:pb-8 lg:pb-4 
        ${borderColor}`}>
        {navBarData}
      </div>
      {/* toggle light and dark desktop slider styles */}
      <div className={`${hiddenEl} px-4 ${toggle ? 'md:py-8 lg:py-5':'md:py-0'} 
        border-b-[1.5px] ${borderColor}`}
      >
        {toggle ? (
          <div className={`md:relative xxl:w-[146.6px] xxl:mx-auto
            text-[18px] lg:text-[12px] font-semibold xxl:mt-12
            py-4 lg:py-3 rounded-xl before:content-[""]
            before:inset-[4px] before:w-[90px] 
            before:absolute before:h-[52px] before:rounded-lg before:-z-[0]
            before:transition-[1s]
            lg:before:w-[70px] lg:before:h-[36.8px] lg:before:inset-[2.5px]
            lg:rounded-[8px] lg:before:rounded-[6px]
            xl:before:w-[65px]
            ${theme === 'light'
              ? 'bg-light/65 text-darkest before:bg-lightest'
              : `bg-dark/60 text-lightest before:bg-darkest 
                before:ml-[92.8px] lg:before:ml-[70px] lg:before:w-[68px] xl:before:ml-[75px]`
            }`}>
            <div
              onClick={toggleTheme}
              className={`flex item-center md:gap-7 lg:gap-6  xl:gap-[31px] 
              px-4 lg:px-3 xl:px-[10px] relative cursor-pointer`}>
              <span className={`${lightDarkStyle} ${theme === 'dark' && 'text-lightest/40'}`}><LuSun /> Light</span>
              <span className={`${lightDarkStyle} ${theme === 'light' && 'text-darkest/60'}`}><HiMoon /> Dark</span>
            </div>
          </div>
        ) : (
          <div className={`${hiddenEl} md:py-5 lg:py-4  m-auto `}>
            <ToggleThemeBtn
              toggleTheme={toggleTheme}
              className={`text-[40px] lg:text-lg md:block m-auto`}>
              {switchIcon}
            </ToggleThemeBtn>
          </div>
        )}
        {/* CV button style */}
        {toggle &&
          <div className={`pt-6 lg:pt-5 xxl:mx-[33px] ${hiddenEl}`}>
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
            } p-3 lg:p-2 xxl:p-2 rounded-full`}
            iconSize={`md:text-xl lg:text-sm`}
          />
        </div>
      </div>
      <div className={`px-4 xxl:px-8 w-full ${hiddenEl} border-t-[1.8px] lg:border-t-[1.5px]
       ${borderColor} 
        md:flex md:items-center
        ${toggle
          ? 'md:gap-8 md:py-9 lg:py-8 xl:py-5'
          : 'md:flex-col md:gap-6 md:py-[25px] lg:py-4'
        }`}>
        <div className={`${themeColor} flex items-center gap-2`}>
          <img
            className={`w-[44px] h-[44px] lg:w-[25px] lg:h-[25px] border-2 lg:border-1
            border-brand rounded-full`}
            src={hero}
            alt="hero"
          />
          <p
            className={`text-[22px] lg:text-lg pl:2 font-semibold 
            ${toggle ? 'block' : 'hidden'}`}>
            User
          </p>
        </div>
        <div className={`cursor-pointer 
          ${toggle ? 'text-4xl lg:text-3xl ml-auto' : 'md:text-5xl lg:text-xl m-auto'} 
            ${themeColor} `
          }
        >
          <IoLogOutOutline/>
        </div>
      </div>
      </div>
    </nav>
  );
}
