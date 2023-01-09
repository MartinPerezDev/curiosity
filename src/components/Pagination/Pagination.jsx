import { useContext } from "react";
import { useEffect, useState } from "react";
import "./Pagination.scss";
import { ThemeContext } from './../../context/ThemeContext';
import { ArticlesContext } from './../../context/ArticlesContext';

export const Pagination = ({count, setCount}) => {
    const { articles, setArticlesPag, countPag, maxArticles } = useContext(ArticlesContext);
    const [pagination, setPagination] = useState([]);
    const { color } = useContext(ThemeContext)

    const handlePagination = (pag) => {
    setCount(pag)
    switch (pag) {
      case 1:
        setArticlesPag(articles.slice(0, maxArticles));
        break;
      case 2:
        setArticlesPag(articles.slice(maxArticles, maxArticles*2));
        break;
      case 3:
        setArticlesPag(articles.slice(maxArticles+maxArticles, maxArticles*3));
        break;
      case 4:
        setArticlesPag(articles.slice(15, 20));
        break;
      case 5:
        setArticlesPag(articles.slice(20, 25));
        break;
      default:
        setArticlesPag(articles.slice(0, 5));
        break;
    }
  };
  useEffect(() => {
    const array = [];
    for (let index = 0; index < countPag; index++) {
      array.push({ id: index+1 });
      setPagination(array);
    }
  }, [articles, countPag, count]);

  return (
    <div className="pagination" style={{border: `1px solid ${color.border}`}}>
      {pagination.map((article) => (
        <div onClick={() => handlePagination(article.id)} className="pag" style={count === article.id ? {boxShadow: "inset 0 -2px 0 rgb(207, 10, 56)"} : {boxShadow: "none"}} key={article.id}>
          {article.id}
        </div>
      ))}
    </div>
  );
};
