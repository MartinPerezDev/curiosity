import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../db/firestore.db'
import { TrendingList } from './TrendingList'
import './TrendingListContainer.scss'

export const TrendingListContainer = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getProducts = async() =>{
            try {
                const itemsCollection = collection(db,'articles');
                const queryItems = query(itemsCollection, where('trending', '==', true)) ;
                const response = await getDocs(queryItems);
                const docs = response.docs;
                const data = docs.map(doc => {
                    return {
                        ...doc.data(), id: doc.id
                    }});
                    setArticles(data);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor: ${error}`);
            } finally {
                setLoading(false);
            }
        }
        getProducts()
    }, [])
    

  return (
    <div className="trending-videos">
        <TrendingList articles={articles} loading={loading}/>
    </div>
  )
}
