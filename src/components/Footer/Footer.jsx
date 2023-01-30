import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FcDebian } from "react-icons/fc";
import {
  AiOutlineYoutube,
  AiOutlineGitlab,
  AiOutlineEdit,
} from "react-icons/ai";
import "./Footer.scss";

export const Footer = () => {
  const { color } = useContext(ThemeContext);
  const backgroundLink = { backgroundColor: color.backgroundBanner }
  return (
    <div id="footer" style={{ backgroundColor: color.background, border: `2px solid ${color.backgroundBanner}` }}>
      <div className="brand">
        <FcDebian className="logo" />
        <p>Curiosity - Web de curiosidades</p>
      </div>
      <div className="links">
        <div className="box-link" style={backgroundLink}>
          <AiOutlineGitlab className="icon" />
        </div>
        <div className="box-link" style={backgroundLink}>
          <AiOutlineEdit className="icon" />
        </div>
        <div className="box-link" style={backgroundLink}>
          <AiOutlineYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};
