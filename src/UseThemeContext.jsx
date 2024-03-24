import React, { createContext, useContext, useState } from 'react'

// Create the theme context
const ThemeContext = createContext()

// Create a custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext)

// Create the ThemeProvider component to wrap your application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContext
