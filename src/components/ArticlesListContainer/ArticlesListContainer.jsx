import React, { useContext, useEffect } from "react";

import { ArticlesContext } from "../../context/ArticlesContext";
import { ArticlesList } from "./ArticlesList";
import { ArticlesLoading } from "./ArticlesLoading";
import { FilterArticles } from "../FilterArticles/FilterArticles";

import "./ArticlesListContainer.scss";

export const ArticlesListContainer = ({ type }) => {
  const { loading, typeArticle, setTypeArticle } = useContext(ArticlesContext);

  const title = typeArticle === "trending" ? "Trending Live" : "Curiosidades";

  const filterArticles = typeArticle !== "trending" && <FilterArticles />;

  const curiositiesList = loading ? <ArticlesLoading /> : <ArticlesList />;

  useEffect(() => {
    setTypeArticle(type);
  }, [type]);

  return (
    <div id="box-videos">
      <div className="title">
        <div className="circle"></div>
        <h2>{title}</h2>
      </div>
      {filterArticles}
      {curiositiesList}
    </div>
  );
};
