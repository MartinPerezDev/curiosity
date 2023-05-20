import React, { useContext, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import logoCuriosity from "../../assets/logo/curiosity.png";
import { Link } from "react-router-dom";
import { Disclaimer } from "./Disclaimer";

import "./Footer.scss";

export const Footer = () => {
  const [viewDisclaimer, setViewDisclaimer] = useState(false);
  const { color } = useContext(ThemeContext);
  const { backgroundBanner, background, backgroundOpacity, text, border } =
    color;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleViewDisclaimer = () => {
    scrollToTop();
    setViewDisclaimer((prev) => !prev);
    viewDisclaimer
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  const disclaimerProps = {
    background: backgroundOpacity,
    border,
    toggleViewDisclaimer,
    text,
  };

  return (
    <>
      <div
        id="footer"
        style={{
          backgroundColor: background,
          border: `2px solid ${backgroundBanner}`,
        }}
      >
        <div className="brand">
          <img src={logoCuriosity} className="logo" alt="logo curiosity" />
          <p>Curiosity - Web de curiosidades</p>
        </div>
        <div className="links">
          <Link to={"/sobre-nosotros"} onClick={scrollToTop}>
            <p style={{ color: text }}>Sobre Nosotros</p>
          </Link>
          <Link to={"/contacto"} onClick={scrollToTop}>
            <p style={{ color: text }}>Contactanos</p>
          </Link>
          <div onClick={toggleViewDisclaimer}>
            <p style={{ color: text }}>Derechos de autor</p>
          </div>
        </div>
      </div>
      {viewDisclaimer && <Disclaimer {...disclaimerProps} />}
    </>
  );
};
