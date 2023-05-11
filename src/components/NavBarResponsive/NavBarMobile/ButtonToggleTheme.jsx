import React from "react";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const ButtonToggleTheme = ({
  theme,
  setTheme,
  text,
  backgroundOpacity,
}) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getButtonProps = () => ({
    className: "button button-right",
    style: { color: text, background: backgroundOpacity },
  });

  const iconComponent =
    theme === "light" ? (
      <MdOutlineDarkMode {...getButtonProps()} />
    ) : (
      <MdOutlineLightMode {...getButtonProps()} />
    );

  return (
    <div className="toggle" onClick={toggleTheme} title="cambiar tema">
      {iconComponent}
    </div>
  );
};
