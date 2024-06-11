// Import necessary functions from React and React Router
import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

// Import custom components
import Header from './Header';
import Footer from './Footer';
import LogoAnim from './LoadingLogo';

// Define the main Layout component and export it as the default export
export default function Layout({ themeColor, borderColor, data, bodyPadding,
  footerTheme, bodyTxt, theme, toggleTheme, appTheme, toggle, handleToggleNavbar,
  brandColor }) {

  // State to keep track of the previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // State to determine if the header should be visible
  const [visible, setVisible] = useState(true);
  // State to manage the loading screen visibility
  const [isLoading, setIsLoading] = useState(true);
  // State to manage the welcome text visibility
  const [showWelcome, setShowWelcome] = useState(false);
  // State to manage the paragraph text visibility
  const [showText, setShowText] = useState(false);
  // State to manage the loading animation visibility
  const [showLoading, setShowLoading] = useState(false);

  // useEffect to handle loading screen timings
  useEffect(() => {
    // Set loading state to true initially
    setIsLoading(true);

    // Set a timeout to show the welcome text after 100 milliseconds
    const welcomeTimeout = setTimeout(() => {
      setShowWelcome(true);
    }, 100);

    // Set a timeout to show the paragraph text after 1 second
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // Set a timeout to show the loading animation after 2 seconds
    const loadingTimeout = setTimeout(() => {
      setShowLoading(true);
    }, 2000);

    // Set a timeout to hide the loading screen after 5 seconds
    const endLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup function to clear timeouts when the component unmounts
    return () => {
      clearTimeout(welcomeTimeout);
      clearTimeout(textTimeout);
      clearTimeout(loadingTimeout);
      clearTimeout(endLoadingTimeout);
    };
  }, []);

  // useEffect to handle scroll events
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Set header visibility based on scroll direction and position
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove scroll event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Determine the header navbar theme based on the current theme
  const headerNavbarTheme = `transition-color ${borderColor} ${theme === 'light' ? 'bg-lightest' : 'bg-darkest'}`;

  return (
    <>
      {/* Conditional rendering based on isLoading state */}
      {isLoading ? (
        <div className={`absolute inset-0 h-auto overflow-hidden`}>
          <div className='flex flex-col justify-center items-center gap-10 py-[100px] xl:py-[120px] '>
            <div className='text-center'>
              <h1 className={`font-bold text-5xl md:text-8xl text-center mt-auto 
                font-Solway transition-opacity duration-1000
               ${themeColor} ${showWelcome ? 'opacity-100' : 'opacity-0'}`}>
                welcome
              </h1>
              <p className={`px-10 pt-9 md:pt-10 md:px-24 lg:pt-8 xl:pt-10 text-xl md:text-3xl lg:text-xl
                leading-relaxed md:leading-relaxed transition-opacity duration-1000 
                font-semibold
                bg-gradient-to-r from-red-600 via-brandDark to-blue-800 inline-block text-transparent bg-clip-text
                ${showText ? 'opacity-100' : 'opacity-0'}`}>
                I'm excited to share my projects with you.
              </p>
            </div>
            {showLoading && (
              <div className=' my-[100px] overflow-hidden'>
                <LogoAnim className={`transition-all duration-1000 ${showLoading ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {/* Render Header component with props */}
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
          {/* Main content area */}
          <main className={`overflow-hidden`}>
            <Outlet />
          </main>
          {/* Render Footer component with props */}
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
    </>
  );
}
