import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LogoAnim from './LoadingLogo';

export default function Layout({ themeColor, borderColor, data, bodyPadding,
  footerTheme, bodyTxt, theme, toggleTheme, appTheme, toggle, handleToggleNavbar,
  brandColor }) {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const welcomeTimeout = setTimeout(() => {
      setShowWelcome(true);
    }, 100); // 100mille second delay for the welcome text

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1 seconds delay for the paragraph text

    const loadingTimeout = setTimeout(() => {
      setShowLoading(true);
    }, 2000); // 2 seconds delay for the loading animation

    const endLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds total delay for ending the loading screen

    return () => {
      clearTimeout(welcomeTimeout);
      clearTimeout(textTimeout);
      clearTimeout(loadingTimeout);
      clearTimeout(endLoadingTimeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const headerNavbarTheme = `transition-color ${borderColor} ${theme === 'light' ? 'bg-lightest' : 'bg-darkest'}`;

  return (
    <div>
      {isLoading ? (
        <div className={`overflow-hidden transition-opacity duration-1000 
        ${!isLoading ? 'opacity-0' : 'opacity-100'} py-[100px] lg:py-[80px] text-center`}>
          <h1 className={`font-bold text-5xl md:text-8xl text-center mt-auto font-Solway transition-opacity duration-1000 ${themeColor} ${showWelcome ? 'opacity-100' : 'opacity-0'}`}>
            welcome
          </h1>
          <p className={`px-10 pt-8 md:pt-10 md:px-24 lg:pt-6 text-xl md:text-3xl lg:text-xl
             leading-relaxed md:leading-relaxed transition-opacity duration-1000 
             font-semibold
             bg-gradient-to-r from-red-600 via-brandDark to-pink-600 inline-block text-transparent bg-clip-text
             ${showText ? 'opacity-100' : 'opacity-0'}`}>
            I'm excited to share my projects with you.
          </p>
          {showLoading && (
             <div className='grid place-content-center m-auto overflow-hidden'>
              <LogoAnim className={`mt-[10px] pt-[140px] md:pt-[180px] lg:pt-[150px]
              transition-all duration-1000  ${showLoading ? 'opacity-100' : 'opacity-0'}`} />
             </div>
          )}
        </div>
      ) : (
        <div>
          <Header 
            themeColor={themeColor}
            toggleTheme={toggleTheme}
            toggle={toggle}
            handleToggleNavbar={handleToggleNavbar}
            theme={theme}
            headerNavbarTheme={headerNavbarTheme}
            visible={visible}
            appTheme={appTheme}
            data={data}
            borderColor={borderColor}
            brandColor={brandColor}
          />
          <main className={`overflow-hidden`}>
            <Outlet />
          </main>
          <Footer 
            data={data}
            footerTheme={footerTheme}
            bodyTxt={bodyTxt}
            theme={theme}
            bodyPadding={bodyPadding}
            brandColor={brandColor}
          />
        </div>
      )}
    </div>
  );
}
