// Import necessary modules from React and React Router
import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import custom components
import Layout from './Layout';
import Home from './Home/Home';
import Work from './Work/Work';
import About from './About/About';
import Contact from './Contact/Contact';
import PageNotFound from './PageNotFound';
import data from '../data';  // Import data
import ScrollToTop from './ScrollPosition';  // Import scroll position utility
import fetchDataWithImages from '../fetchData';  // Import function to fetch data with images
import ThemeContext from './UseThemeContext';  // Import theme context

// Define the main App component and export it as the default export
export default function App() {
  // Destructure the theme context to get necessary values and functions
  const {
    theme, openId, toggleDescription,
    toggleTheme, toggle, handleToggleNavbar
  } = useContext(ThemeContext);

  // State to hold the fetched data from Firebase
  const [firebaseData, setFirebaseData] = useState([]);
  
  // useEffect to fetch data from Firebase on component mount
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchDataWithImages();
      setFirebaseData(fetchedData);
    };
    
    fetchData();
  }, []);
  
  // Define styles related to the current theme
  const themeColor = theme === "light" 
    ? "block text-darkest/80" 
    : "block text-lightest/80";

  const appTheme = theme === "light" ? 'bg-light/40' : 'bg-darkest';

  const brandColor = theme === 'light' ? 'text-brand' : 'text-brandDark';

  const layoutTheme = theme === 'light' 
    ? 'bg-lightest' 
    : 'bg-dark/40';

  // Define text-related styles based on the current theme
  const bodyTxt = theme === "light" ? "text-mid/90" : "text-light/85";

  const highLightTxt = `${brandColor} text-brand text-2xl md:text-[32px] 
    lg:text-3xl font-semibold text-center`
  ;

  const highLightTxtOne = `
    m-auto block uppercase
    ${theme === 'light' ? 'text-dark' : 'text-light'}
    leading-normal md:leading-loose mr-auto text-[18px]
    lg:leading-loose md:text-2xl lg:text-lg font-semibold`
  ;

  // Define border color style based on the current theme
  const borderColor = theme === 'light'
    ? 'border-brand/25'
    : 'border-brandDark/25'
  ;

  // Define input fields for the contact form
  const inputFields = [
    { id: 'name', type: 'text', label: 'Name*' },
    { id: 'email', type: 'email', label: 'Email*' },
    { id: 'phone', type: 'tel', label: 'Phone*' },
    { id: 'message', type: 'textarea', label: 'Message*'}
  ];

  // Define body padding style based on the toggle state
  const bodyPadding = toggle 
    ? `px-5 md:pl-[255px] md:pr-[28px] md:animate-fadeInLeft
     lg:pl-[220px] lg:pr-[40px] xl:pl-[250px] xl:pr-[60px] xxl:pl-[290px]`
    : `px-5 md:pl-[160px] md:pr-[45px] md:animate-fadeInTop 
    lg:pl-[150px] lg:pr-[50px] xl:pl-[180px] xl:pr-[80px] 
    xxl:pl-[160px] xxl:pr-[80px]`
  ;

  // Define form theme style based on the current theme
  const formTheme = theme === 'light' ? 'bg-slate-200/90' : 'bg-dark/40';

  // Render the application
  return (
    <div className={`antialiased overflow-x-hidden min-h-screen 
     !scroll-smooth font-OpenSan ${appTheme}`}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' 
            element={
              <Layout 
                themeColor={themeColor}
                borderColor={borderColor}
                data={data}
                bodyTxt={bodyTxt}
                toggleTheme={toggleTheme}
                theme={theme}
                appTheme={appTheme}
                toggle={toggle}
                handleToggleNavbar={handleToggleNavbar}
                bodyPadding={bodyPadding}
                brandColor={brandColor}
              />
            }
          >
            <Route index 
              element={
                <Home 
                  theme={theme} 
                  openId={openId} 
                  toggleDescription={toggleDescription}
                  themeColor={themeColor} 
                  layoutTheme={layoutTheme}
                  highLightTxtOne={highLightTxtOne}
                  bodyTxt={bodyTxt}
                  highLightTxt={highLightTxt} 
                  borderColor={borderColor}
                  inputFields={inputFields}
                  data={data}
                  toggle={toggle}
                  bodyPadding={bodyPadding}
                  formTheme={formTheme}
                  brandColor={brandColor}
                  firebaseData={firebaseData} 
                  
                />
              }
            />
            <Route 
              path='works' 
              element={
                <Work 
                  theme={theme} 
                  openId={openId} 
                  toggleDescription={toggleDescription}
                  themeColor={themeColor} 
                  layoutTheme={layoutTheme} 
                  highLightTxtOne={highLightTxtOne}
                  bodyTxt={bodyTxt}
                  highLightTxt={highLightTxt} 
                  data={data}
                  bodyPadding={bodyPadding}
                  brandColor={brandColor}
                />
              }
            />
            <Route 
              path='about' 
              element={
                <About 
                  bodyTxt={bodyTxt}
                  data={data}
                  theme={theme} 
                  openId={openId} 
                  toggleDescription={toggleDescription}
                  themeColor={themeColor} 
                  layoutTheme={layoutTheme}
                  highLightTxt={highLightTxt}
                  highLightTxtOne={highLightTxtOne}
                  bodyPadding={bodyPadding}
                  brandColor={brandColor}
                  firebaseData={firebaseData}
                  borderColor={borderColor}
                />
              }
            />
            <Route 
              path='contact' 
              element={
                <Contact 
                  highLightTxt={highLightTxt}
                  highLightTxtOne={highLightTxtOne}
                  data={data}
                  inputFields={inputFields}
                  bodyTxt={bodyTxt}
                  theme={theme}
                  themeColor={themeColor}
                  borderColor={borderColor}
                  bodyPadding={bodyPadding}
                  formTheme={formTheme}
                  brandColor={brandColor}
                />
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
