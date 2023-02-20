import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { VscHome, VscSymbolMethod, VscTerminalDebian } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";

import { NavBarMobile } from "./NavBarMobile/NavBarMobile";
import { NavBarPc } from "./NavBarPc/NavBarPc";
import { ThemeContext } from "./../../context/ThemeContext";

import logoCuriosity from "../../assets/logo/curiosity.png";

export const NavBarResponsive = () => {
  const { theme, setTheme, color } = useContext(ThemeContext);
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const categoriesMenu = [
    {
      name: "Inicio",
      route: "/",
      icon: <VscHome />,
    },
    {
      name: "Curiosidades",
      route: "/curiosidades",
      icon: <VscSymbolMethod />,
    },
    {
      name: "Sobre Nosotros",
      route: "/sobre-nosotros",
      icon: <VscTerminalDebian />,
    },
    {
      name: "Contacto",
      route: "/contacto",
      icon: <AiOutlineMail />,
    },
  ];
  const props = { logoCuriosity, theme, setTheme, color, categoriesMenu };
  return (
    <>{isMobile ? <NavBarMobile {...props} /> : <NavBarPc {...props} />}</>
  );
};
