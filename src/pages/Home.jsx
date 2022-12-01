import React from "react";
import "./Home.scss";
import { TrendingListContainer } from "../components/TrendingListContainer/TrendingListContainer";

export const Home = () => {
  return (
    <div id="home">
      <TrendingListContainer trending={true}/>
    </div>
  );
};
