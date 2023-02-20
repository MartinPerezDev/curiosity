import React, { useContext, useEffect } from "react";
import { TrendingList } from "./TrendingList";
import { TrendingLoading } from "./TrendingLoading";
import "./TrendingListContainer.scss";
import { ArticlesContext } from "./../../context/ArticlesContext";
import { FilterCuriosidades } from "./../FilterCuriosidades/FilterCuriosidades";

export const TrendingListContainer = ({ type }) => {
  const { loading, typeArticle, setTypeArticle, getArticles } =
    useContext(ArticlesContext);

  useEffect(() => {
    setTypeArticle(type);
    getArticles(type);
  }, [type]);

  return (
    <div id="box-videos">
      <div className="title">
        <div className="circle"></div>
        <h2>
          {typeArticle === "trending"
            ? "Trending Live"
            : "Listado de Curiosidades"}
        </h2>
      </div>
      {typeArticle !== "trending" && <FilterCuriosidades />}
      {loading ? <TrendingLoading /> : <TrendingList max={5} />}
    </div>
  );
};
