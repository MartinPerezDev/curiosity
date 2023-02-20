import React, { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowReturnLeft } from "react-icons/bs";

import "./NavBarMobile.scss";
import { Link } from "react-router-dom";

export const NavBarMobile = ({
  logoCuriosity,
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
    <>
      <div id="nav-bar-mobile">
        <div className="banner">
          <div className="toggle">
            <GiHamburgerMenu
              onClick={handleToggleMenu}
              className="button"
              style={{ background: "gray" }}
            />
          </div>
          <img src={logoCuriosity} className="logo" alt="logo-curiosity" />
          <div
            className="toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <CiDark className="button" style={{ background: "gray" }} />
          </div>
        </div>
        <div
          className={
            toggleMenu === null
              ? "menu-mobile"
              : toggleMenu === false
              ? "menu-mobile close"
              : "menu-mobile open"
          }
        >
          <div className="toggle" onClick={handleToggleMenu}>
            <BsArrowReturnLeft
              className="button"
              style={{ background: "gray" }}
            />
          </div>
          <div className="nav">
            {categoriesMenu.map((categorie) => (
              <Link
                onClick={handleToggleMenu}
                key={categorie.name}
                to={categorie.route}
                className="link"
                style={{ color: "white" }}
              >
                {categorie.icon}
                <p>{categorie.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
