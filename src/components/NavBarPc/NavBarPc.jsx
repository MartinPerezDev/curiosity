import React, { useContext } from "react";
import { FcDebian } from "react-icons/fc";
import "./NavBarPc.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";
import { VscHome, VscSymbolMethod, VscTerminalDebian, VscKey } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const NavBarPc = () => {
  const { theme, setTheme, color } = useContext(ThemeContext);
  const categoriesMenu = [
    {
      name: "Inicio",
      route: "/",
      icon: <VscHome />
    },
    {
      name: "Curiosidades",
      route: "/curiosidades",
      icon: <VscSymbolMethod />
    },
    {
      name: "Sobre Nosotros",
      route: "/sobre-nosotros",
      icon: <VscTerminalDebian />
    },
    {
      name: "Contacto",
      route: "/contacto",
      icon: <AiOutlineMail />
    }
  ]

  return (
    <div id="nav-bar-pc">
      <div className="banner">
        <FcDebian className="logo" />
      </div>
      <div className="menu" style={{ background: `${color.background}`}}>
        <div className="brand">
          <FcDebian className="logo" />
          <p>Curiosity</p>
        </div>
        <ul>
          {
            categoriesMenu.map(categorie=>{
              return <Link to={categorie.route} className="link" style={{ color: `${color.text}`}}>
                {categorie.icon}
                <p>{categorie.name}</p>
              </Link>
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
