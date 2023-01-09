import React from 'react'
import "./Curiosidades.scss"
import { TrendingListContainer } from './../components/TrendingListContainer/TrendingListContainer';

export const Curiosidades = () => {
  return (
    <div id='curiosidades'>
        <TrendingListContainer type={"all"}/>
    </div>
  )
}
