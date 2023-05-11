import React from "react";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const ButtonToggleTheme = ({ theme, setTheme, color }) => {
  return (
    <div
      className="toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MdOutlineDarkMode
          className="button button-right"
          style={{
            color: color.text,
            background: color.backgroundOpacity,
          }}
        />
      ) : (
        <MdOutlineLightMode
          className="button button-right"
          style={{
            color: color.text,
            background: color.backgroundOpacity,
          }}
        />
      )}
    </div>
  );
};
