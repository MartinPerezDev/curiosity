import React, { useContext } from "react";
import { FcDebian } from "react-icons/fc";
import "./NavBarPc.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";
import { VscHome, VscSymbolMethod, VscTerminalDebian, VscKey } from "react-icons/vsc";

export const NavBarPc = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div id="nav-bar-pc">
      <div className="banner">
        <FcDebian className="logo" />
      </div>
      <div
        className="menu"
        style={{
          background: `${
            theme === "light"
              ? "rgba(0, 0, 0, 0.019)"
              : "rgba(250, 250, 250, 0.059)"
          }`,
        }}
      >
        <div className="brand">
          <FcDebian className="logo" />
          <p>Curiosity</p>
        </div>
        <ul>
          <div><VscHome /><p>Inicio</p></div>
          <div><VscSymbolMethod /><p>Curiosidades</p></div>
          <div><VscTerminalDebian /><p>Sobre Nosotros</p></div>
          <div><VscKey /><p>Iniciar Sesion</p></div>
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
