// Import necessary functions from React
import React, { createContext, useContext, useState, useEffect } from 'react'

// Create a context for the theme
const ThemeContext = createContext()

// Custom hook to use the ThemeContext in components
export const useTheme = () => useContext(ThemeContext)

// ThemeProvider component to provide theme context to its children
export const ThemeProvider = ({ children }) => {
  // State to keep track of the current theme, default is 'light'
  const [theme, setTheme] = useState('light')
  // State to keep track of the navbar toggle status, default is true
  const [toggle, setToggle] = useState(true)

  // useEffect to set the initial theme based on user's system preference
  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Set the theme based on the user's preference
    setTheme(prefersDarkMode ? 'dark' : 'light');
  },[]); // Empty dependency array ensures this runs only once when the component mounts

  // Function to toggle the navbar's open/closed state
  const handleToggleNavbar = () => {
    // Toggle the state between true and false
    setToggle(prevToggle => !prevToggle)
  } 

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    // Switch theme state between 'light' and 'dark'
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // State to keep track of the currently opened item's ID, default is null
  const [openId, setOpenId] = useState(null)
  // Function to toggle the description visibility for a specific item
  const toggleDescription = (id) => {
    // If the clicked item's ID matches the currently open ID, set it to null (close it), otherwise set it to the clicked item's ID (open it)
    setOpenId(prevId => (prevId === id ? null : id))
  }

  // Return the ThemeContext provider with the state and functions provided to its children
  return (
    <ThemeContext.Provider value={
      { 
        theme, // Current theme
        toggleTheme, // Function to toggle theme
        openId, // Currently opened item's ID
        toggleDescription, // Function to toggle description visibility
        toggle, // Navbar toggle state
        handleToggleNavbar // Function to toggle navbar
      }
    }>
      {children} {/* Render children components within the ThemeContext provider */}
    </ThemeContext.Provider>
  )
}

// Export the ThemeContext for use in other parts of the application
export default ThemeContext
