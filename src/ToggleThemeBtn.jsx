import React from 'react'

export default function ToggleThemeBtn({toggleTheme, children, className}) {
  return (
      <button 
        title='toggle-theme' 
        onClick={toggleTheme} 
        className={`${className}`}
      >
      {children}
    </button>
  )
}
