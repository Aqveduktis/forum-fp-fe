import React from 'react'
import { useSelector } from 'react-redux'
import { GameCard } from './GameCard'
import { Wrapper } from 'lib/containers'
import {Text} from 'lib/text'

export const Games = () => {
  const games = useSelector((store)=>store.gameStore.gameList)
console.log("games", games)
  return(

    <Wrapper>
        {games && games.map((game)=>{
      return(<GameCard info={game} />)
    })}
    {!games.length && <Text>404 no games found</Text>}
    </Wrapper>

  )
}