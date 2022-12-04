import React from 'react'
import { Trending } from './Trending'

export const TrendingList = ({articles}) => {
  return (
    <>
      {
        articles.map((article)=>(
            <Trending {...article} key={article.id} />
        ))
      }  
    </>
  )
}
