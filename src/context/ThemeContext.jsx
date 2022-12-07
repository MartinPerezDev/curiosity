import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const init = JSON.parse(localStorage.getItem("theme-curiosity")) || "dark";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(init);
  const [color, setColor] = useState([]);

  useEffect(() => {
    const lightColor = {
      background: "rgba(0, 0, 0, 0.019)",
      backgroundBanner: "rgba(7, 0, 0, 0.13)",
      border: "#6b6a6a",
      backgroundTextLoading: "rgba(0, 0, 0, 0.247)",
    };
    const darkColor = {
      background: "rgba(250, 250, 250, 0.059)",
      backgroundBanner: "rgba(0, 0, 0, 0.158)",
      border: "#a3a3a3",
      backgroundTextLoading: "rgba(255, 255, 255, 0.247)",
    };
    
    localStorage.setItem("theme-curiosity", JSON.stringify(theme));
    theme === "light" ? setColor(lightColor) : setColor(darkColor);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        color,
        setTheme,
      }}
    >
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
