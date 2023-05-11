import React, { useState } from "react";

import "./NavBarMobile.scss";
import { ButtonToggleTheme } from "./ButtonToggleTheme";
import { LogoCuriosity } from "../../Utils/LogoCuriosity";
import { ButtonToggleMenu } from "./ButtonToggleMenu";
import { CategoriesMenu } from "./CategoriesMenu";

export const NavBarMobile = ({
  theme,
  setTheme,
  color,
  categoriesMenu,
}) => {
  const [toggleMenu, setToggleMenu] = useState(null);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div id="nav-bar-mobile">
      <div className="banner">
        <ButtonToggleMenu
          icon="hamburguer"
          handleToggleMenu={handleToggleMenu}
          color={color}
        />
        <LogoCuriosity styles={"logo"} />
        <ButtonToggleTheme theme={theme} setTheme={setTheme} color={color} />
      </div>
      <div
        className={
          toggleMenu === null
            ? "menu-mobile"
            : toggleMenu === false
            ? "menu-mobile close"
            : "menu-mobile open"
        }
        style={{
          backgroundColor: color.backgroundOpacity,
          borderRight: `2px solid ${color.border}`,
          borderBottom: `2px solid ${color.border}`,
        }}
      >
        <ButtonToggleMenu
          icon="return"
          handleToggleMenu={handleToggleMenu}
          color={color}
        />
        <CategoriesMenu
          categoriesMenu={categoriesMenu}
          handleToggleMenu={handleToggleMenu}
          color={color}
        />
      </div>
    </div>
  );
};
