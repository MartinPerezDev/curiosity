import React, { useContext } from "react";
import { FcDebian } from "react-icons/fc";
import "./NavBarPc.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";
import { VscHome, VscSymbolMethod, VscTerminalDebian, VscKey } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const NavBarPc = () => {
  const { theme, setTheme, color } = useContext(ThemeContext);

  return (
    <div id="nav-bar-pc">
      <div className="banner">
        <FcDebian className="logo" />
      </div>
      <div
        className="menu"
        style={{ background: `${color.background}`}}
      >
        <div className="brand">
          <FcDebian className="logo" />
          <p>Curiosity</p>
        </div>
        <ul>
          <Link to={"/"} className="link" style={{ color: `${color.text}`}}><VscHome /><p>Inicio</p></Link>
          <Link to={"/curiosidades"} className="link" style={{ color: `${color.text}`}}><VscSymbolMethod /><p>Curiosidades</p></Link>
          <Link to={"/sobre-nosotros"} className="link" style={{ color: `${color.text}`}}><VscTerminalDebian /><p>Sobre Nosotros</p></Link>
          <Link to={"/"} className="link" style={{ color: `${color.text}`}}><VscKey /><p>Iniciar Sesion</p></Link>
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
