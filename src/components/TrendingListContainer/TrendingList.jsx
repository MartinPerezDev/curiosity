import { Trending } from "./Trending";
import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { ArticlesContext } from "./../../context/ArticlesContext";

export const TrendingList = () => {
  const { articles, typeArticle, articlesPag, maxArticles, setArticlesPag } = useContext(ArticlesContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setArticlesPag(articles.slice(0, maxArticles));
  }, [articles]);

  return (
    <>
      {typeArticle !== "trending" && <Pagination count={count} setCount={setCount}/>}
      {articlesPag.map((article) => (
        <Trending {...article} key={article.id} />
      ))}
      {typeArticle !== "trending" && <Pagination count={count} setCount={setCount}/>}
    </>
  );
};
