import React from "react";

import { CiLight, CiDark } from "react-icons/ci";

import "./NavBarPc.scss";
import { LogoCuriosity } from "../../Utils/LogoCuriosity";
import { CategoriesLink } from "../CategoriesLink";

export const NavBarPc = ({ theme, setTheme, color, categoriesMenu }) => {
  const { text, background } = color;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getPropsCategoriesMenu = () => ({
    type: "pc",
    categoriesMenu,
    text,
  });

  const ThemeIcon =
    theme === "light" ? (
      <CiDark className="button" />
    ) : (
      <CiLight className="button" />
    );

  return (
    <div id="nav-bar-pc">
      <div className="banner">
        <LogoCuriosity />
      </div>
      <div className="menu" style={{ backgroundColor: background }}>
        <div className="brand">
          <LogoCuriosity />
          <p>Curiosity</p>
        </div>
        <CategoriesLink {...getPropsCategoriesMenu()} />
        <div className="theme-button" onClick={toggleTheme}>
          {ThemeIcon}
        </div>
      </div>
    </div>
  );
};
