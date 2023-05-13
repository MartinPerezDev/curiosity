import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ArticlesListContainer } from "../components/ArticlesListContainer/ArticlesListContainer";

import "./Home.scss";

export const Home = () => {
  const { color } = useContext(ThemeContext)
  const {backgroundBanner, border} = color
  const propType = "trending"

  return (
    <div id="home">
      <div className="banner" style={{backgroundColor: backgroundBanner}}>
        <div className="banner-text">
          <p>Disfruta de un recopilatorio de las mejores curiosidades sobre ciencia y tecnologia en un solo lugar!</p>
          <div className="button" style={{border: `1px solid ${border}`}}>Empecemos!</div>
        </div>
        <div className="banner-img"></div>
      </div>
      <ArticlesListContainer type={propType}/>
    </div>
  );
};
