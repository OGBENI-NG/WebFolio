import React, { createContext, useContext, useState, useEffect } from 'react'

// Create the theme context
const ThemeContext = createContext()

// Create a custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext)

// Create the ThemeProvider component to wrap your application
export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('light')
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the theme based on the user's preference
    setTheme(prefersDarkMode ? 'dark' : 'light');
  },[]); // Run this effect only once on component mount

  //toggle navbar 
  const handleToggleNavbar = () => {
    setToggle(prevToggle => !prevToggle)
  }


  //toggle switch between dark and light
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  //toggle to open description in work
  const [openId, setOpenId] = useState(null)
  const toggleDescription = (id) => {
    setOpenId(prevId => (prevId === id ? null : id))
  }

  return (
    <ThemeContext.Provider value={
      { theme, toggleTheme, openId, 
        toggleDescription, toggle, 
        handleToggleNavbar
      }
    }>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContext
