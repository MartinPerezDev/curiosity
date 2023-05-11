import React from "react";
import { NavLink } from "react-router-dom";

import { CiLight, CiDark } from "react-icons/ci";

import "./NavBarPc.scss";

export const NavBarPc = ({ logoCuriosity, theme, setTheme, color, categoriesMenu }) => {

  return (
    <div id="nav-bar-pc">
      <div className="banner">
        <img src={logoCuriosity} className="logo" alt="logo-curiosity"/>
      </div>
      <div className="menu" style={{ background: `${color.background}`}}>
        <div className="brand">
          <img src={logoCuriosity} className="logo" alt="logo-curiosity"/>
          <p>Curiosity</p>
        </div>
        <ul>
          {
            categoriesMenu.map(categorie=>{
              return <NavLink key={categorie.name} to={categorie.route} className="link" activeClassName="active" style={{ color: `${color.text}`}}>
                {categorie.icon}
                <p>{categorie.name}</p>
              </NavLink>
            })
          }
        </ul>
        <div className="theme-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {
              theme === "light" ? 
              <CiDark className="button"/>
              :
              <CiLight className="button"/>
            }   
        </div>
      </div>
    </div>
  );
};
