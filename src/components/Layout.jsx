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
    }, 100); // 1 second delay for the welcome text

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1 seconds delay for the paragraph text

    const loadingTimeout = setTimeout(() => {
      setShowLoading(true);
    }, 2000); // 2 seconds delay for the loading animation

    const endLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds total delay for ending the loading screen

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
        <div className={`${themeColor} transition-all duration-1000   text-center`}>
          <h1 className={`font-bold text-5xl md:text-8xl text-center mt-auto font-Solway pt-10 transition-opacity duration-1000 ${showWelcome ? 'opacity-100' : 'opacity-0'}`}>
            welcome
          </h1>
          <p className={`px-10 pt-12 md:px-20 lg:pt-6 text-lg md:text-2xl leading-relaxed lg:leading-loose transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
            I'm excited to share my projects with you. Let's build something incredible together!
          </p>
          {showLoading && (
             <div className='grid place-content-center m-auto overflow-hidden'>
              <LogoAnim className={`mt-[80px] lg:mt-[30px] pt-[120px] md:pt-[180px] transition-opacity duration-1000 ${showLoading ? 'opacity-100' : 'opacity-0'}`} />
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
