import "./Home.scss";
import { TrendingListContainer } from "../components/TrendingListContainer/TrendingListContainer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Home = () => {
  const { color } = useContext(ThemeContext)

  return (
    <div id="home">
      <div className="banner" style={{backgroundColor: color.backgroundBanner}}>
        <div className="banner-text">
          <p>Disfruta de un recopilatorio de las mejores curiosidades sobre ciencia y tecnologia en un solo lugar!</p>
          <div className="button" style={{border: `1px solid ${color.border}`}}>Empecemos!</div>
        </div>
        <div className="banner-img"></div>
      </div>
      <TrendingListContainer type={"trending"}/>
    </div>
  );
};
