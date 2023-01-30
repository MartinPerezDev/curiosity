import React ,{ createContext, useState } from "react";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './../db/firestore.db';

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [articlesPag, setArticlesPag] = useState([])
  const [filterArticles, setFilterArticles] = useState([])
  const [typeArticle, setTypeArticle] = useState("")
  const [countPag, setCountPag] = useState(1);
  const [loading, setLoading] = useState(true)
  const maxArticles = 5


  const getArticles = async (type) => {
    setLoading(true)
    try {
      const itemsCollection = collection(db, "articles");
      const queryItemsTrending = query(itemsCollection, where("trending", "==", true));
      const response = await getDocs(
        type === "trending" ? queryItemsTrending : itemsCollection
      );
      const docs = response.docs;
      let data = docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setArticles(data);
      setFilterArticles(data)
      setCountPag(Math.ceil(data.length / maxArticles))
    } catch (error) {
      console.log(`Error al intentar conectar con el servidor: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (typeFilter) => {
    const data = filterArticles.filter(res => {
      if (res.categories.some(res => res.name === typeFilter)) {
        return ({ ...res });
      }
      return undefined
    })
    setArticles(data)
    setCountPag(Math.ceil(data.length / maxArticles))
  };  
  
  const resetFilter = async () => {
    getArticles("all")
    setCountPag(Math.ceil(articles.length / maxArticles))
  };  

  return (
    <ArticlesContext.Provider value={{articles, loading, typeArticle, articlesPag, maxArticles, countPag, setArticlesPag, setTypeArticle, getArticles, handleFilter, resetFilter}}>
        {children}
    </ArticlesContext.Provider>
  );
};
