import React from 'react'
import { useSelector } from 'react-redux'
import { GameCard } from './GameCard'
import { Wrapper } from 'lib/containers'

export const Games = () => {
  const games = useSelector((store)=>store.gameStore.gameList)
console.log(games)
  return(

    <Wrapper>
        {games.map((game)=>{
      return(<GameCard info={game} />)
    })}
    </Wrapper>

  )
}