import React, { createContext, useEffect, useRef, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./../db/firestore.db";

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [articlesPag, setArticlesPag] = useState([]);
  const [typeArticle, setTypeArticle] = useState("");
  const [countPag, setCountPag] = useState(1);
  const [loading, setLoading] = useState(true);
  const maxArticles = 5;
  const originalArticles = useRef([]);
  const categories = useRef([]);

  useEffect(() => {
    getAllArticles();
    getCategories();
  }, []);

  const getCategories = async() => {
    try {
      const categoriesCollection = collection(db, "categories");
      const res = await getDocs(categoriesCollection);
      let data = res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      categories.current = [...data];
    } catch (error) {
      console.log(`Error al intentar conectar con el servidor: ${error}`);
    }
  };

  const calculatePageCount = (data) => {
    setCountPag(Math.ceil(data.length / maxArticles));
  };

  const getAllArticles = async () => {
    setLoading(true);
    try {
      const itemsCollection = collection(db, "articles");
      const response = await getDocs(itemsCollection);
      let data = response.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setArticles(data);
      originalArticles.current = [...data];
      calculatePageCount(data);
    } catch (error) {
      console.log(`Error al intentar conectar con el servidor: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const getTrendingArticles = () =>
    originalArticles.current.filter((res) => res.trending === true);

  const handleFilter = (typeFilter) => {
    const data = originalArticles.current.filter((res) => {
      if (res.categories.some((res) => res.name === typeFilter)) {
        return { ...res };
      }
      return undefined;
    });
    setArticles(data);
    calculatePageCount(data);
  };

  const resetFilter = () => {
    setArticles(originalArticles.current);
    calculatePageCount(originalArticles.current);
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        loading,
        typeArticle,
        articlesPag,
        maxArticles,
        countPag,
        categories,
        setArticlesPag,
        setTypeArticle,
        getTrendingArticles,
        handleFilter,
        resetFilter,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
