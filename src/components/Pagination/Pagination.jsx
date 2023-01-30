import React, { useEffect, useState, useContext } from "react";
import "./Pagination.scss";
import { ThemeContext } from "./../../context/ThemeContext";
import { ArticlesContext } from "./../../context/ArticlesContext";

export const Pagination = ({ count, setCount }) => {
  const { articles, setArticlesPag, countPag, maxArticles } =
    useContext(ArticlesContext);
  const [pagination, setPagination] = useState([]);
  const { color } = useContext(ThemeContext);

  const handlePagination = (pag) => {
    setCount(pag);
    setArticlesPag(articles.slice(maxArticles * (pag - 1), maxArticles * pag));
  };

  useEffect(() => {
    const array = [];
    for (let index = 0; index < countPag; index++) {
      array.push({ id: index + 1 });
      setPagination(array);
    }
  }, [articles, countPag, count]);

  return (
    <div className="pagination" style={{ border: `1px solid ${color.border}` }}>
      {pagination.map((article) => (
        <div
          onClick={() => handlePagination(article.id)}
          className="pag"
          style={
            count === article.id
              ? { boxShadow: "inset 0 -2px 0 rgb(207, 10, 56)" }
              : { boxShadow: "none" }
          }
          key={article.id}
        >
          {article.id}
        </div>
      ))}
    </div>
  );
};
