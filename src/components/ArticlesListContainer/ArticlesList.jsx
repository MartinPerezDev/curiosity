import React, { useContext, useEffect, useState } from "react";

import { Pagination } from "../Pagination/Pagination";
import { ArticlesContext } from "../../context/ArticlesContext";
import { Article } from "./Article";

export const ArticlesList = () => {
  const {
    articles,
    typeArticle,
    articlesPag,
    maxArticles,
    setArticlesPag,
    getTrendingArticles,
  } = useContext(ArticlesContext);
  const [count, setCount] = useState(1);

  const getTrending = () => {
    const data = getTrendingArticles();
    setArticlesPag(data.slice(0, maxArticles));
  };

  const getAll = () => setArticlesPag(articles.slice(0, maxArticles));

  const articlesList = articlesPag.map((article) => (
    <Article {...article} key={article.id} />
  ));

  const showPagination = typeArticle !== "trending" && (
    <Pagination count={count} setCount={setCount} />
  );

  useEffect(() => {
    typeArticle === "trending" ? getTrending() : getAll();
  }, [articles, typeArticle]);

  return (
    <>
      {showPagination}
      {articlesList}
      {showPagination}
    </>
  );
};
