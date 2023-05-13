import React, { useEffect, useState, useContext } from "react";

import { ThemeContext } from "./../../context/ThemeContext";
import { ArticlesContext } from "./../../context/ArticlesContext";

import "./Pagination.scss";

export const Pagination = ({ count, setCount }) => {
  const { articles, setArticlesPag, countPag, maxArticles } =
    useContext(ArticlesContext);
  const [pagination, setPagination] = useState([]);
  const { color } = useContext(ThemeContext);

  useEffect(() => {
    const array = [];
    for (let index = 0; index < countPag; index++) {
      array.push({ id: index + 1 });
    }
    setPagination(array);
  }, [articles, countPag, count]);

  const handlePagination = (pag) => {
    setCount(pag);
    setArticlesPag(articles.slice(maxArticles * (pag - 1), maxArticles * pag));
  };

  const getPaginationStyle = (id) => {
    return count === id
      ? { boxShadow: "inset 0 -2px 0 rgb(207, 10, 56)" }
      : { boxShadow: "none" };
  };

  const paginationArticles = () => {
    return pagination.map(({ id }) => {
      const stylesPagination = getPaginationStyle(id);
      return (
        <div
          onClick={() => handlePagination(id)}
          className="pag"
          style={stylesPagination}
          key={id}
        >
          {id}
        </div>
      );
    });
  };

  return (
    <div className="pagination" style={{ border: `1px solid ${color.border}` }}>
      {paginationArticles()}
    </div>
  );
};
