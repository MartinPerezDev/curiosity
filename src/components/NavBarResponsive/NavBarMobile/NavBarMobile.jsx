import React, { useState } from "react";

import "./NavBarMobile.scss";
import { ButtonToggleTheme } from "./ButtonToggleTheme";
import { LogoCuriosity } from "../../Utils/LogoCuriosity";
import { ButtonToggleMenu } from "./ButtonToggleMenu";
import { CategoriesLink } from "../CategoriesLink";

export const NavBarMobile = ({ theme, setTheme, color, categoriesMenu }) => {
  const [toggleMenu, setToggleMenu] = useState(null);
  const { border, text, backgroundOpacity } = color;

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const getMenuClassName = () => {
    if (toggleMenu === null) {
      return "menu-mobile";
    } else if (toggleMenu === false) {
      return "menu-mobile close";
    } else {
      return "menu-mobile open";
    }
  };

  const getMenuProps = () => ({
    className: getMenuClassName(),
    style: {
      backgroundColor: backgroundOpacity,
      borderRight: `2px solid ${border}`,
      borderBottom: `2px solid ${border}`,
    },
  });

  const getMenuPropsToggle = () => ({
    handleToggleMenu,
    color,
    text,
    backgroundOpacity,
  });

  const getThemePropsToggle = () => ({
    theme,
    setTheme,
    text,
    backgroundOpacity,
  });

  const getPropsCategoriesMenu = () => ({
    type: "mobile",
    categoriesMenu,
    handleToggleMenu,
    text,
  });

  return (
    <div id="nav-bar-mobile">
      <div className="banner">
        <ButtonToggleMenu icon="hamburguer" {...getMenuPropsToggle()} />
        <LogoCuriosity />
        <ButtonToggleTheme {...getThemePropsToggle()} />
      </div>
      <div title="box menu" {...getMenuProps()}>
        <ButtonToggleMenu icon="return" {...getMenuPropsToggle()} />
        <CategoriesLink {...getPropsCategoriesMenu()} />
      </div>
    </div>
  );
};
