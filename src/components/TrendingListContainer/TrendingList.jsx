import React from 'react'
import { Trending } from './Trending'

export const TrendingList = ({articles, loading}) => {
  return (
    <>
      {
        articles.map((article)=>(
            <Trending {...article} key={article.id} loading={loading}/>
        ))
      }  
    </>
  )
}
