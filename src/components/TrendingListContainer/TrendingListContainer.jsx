import { useContext, useEffect } from 'react'
import { TrendingList } from './TrendingList'
import { TrendingLoading } from './TrendingLoading'
import './TrendingListContainer.scss'
import { ArticlesContext } from './../../context/ArticlesContext';
import { FilterCuriosidades } from './../FilterCuriosidades/FilterCuriosidades';

export const TrendingListContainer = ({type}) => {

    const { loading, typeArticle, setTypeArticle, getArticles } = useContext(ArticlesContext)

    useEffect(() => {
        setTypeArticle(type)
        getArticles(type)
    }, [type])
    
  return (
    <div id="trending-videos">
        <div className='title'>
            {
                typeArticle === "trending" ?
                <><div className='circle'></div><h2>Trending Live</h2></>
            :
                <><div className='circle'></div><h2>Listado de Curiosidades</h2></>
            }
        </div>
        {typeArticle !== "trending" && <FilterCuriosidades />}
        {
            loading ?
            <TrendingLoading />
            :
            <TrendingList max={5}/>
        }
    </div>
  )
}
