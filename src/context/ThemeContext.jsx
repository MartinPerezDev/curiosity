import React, { createContext, useEffect, useState } from 'react'


export const ThemeContext = createContext()
const init = JSON.parse(localStorage.getItem('theme-curiosity')) || "light"

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState(init)

    useEffect(() => {
        localStorage.setItem('theme-curiosity', JSON.stringify(theme))
    }, [theme])
    
  return (
    <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
