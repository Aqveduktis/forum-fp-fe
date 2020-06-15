import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {gameStore, fetchGames} from '../reducers/gameStore'
import { Games } from 'components/Games'
import { Page } from 'lib/containers'
import { PageTitle } from 'lib/text'
import { GameCard } from '../components/GameCard'
import { Wrapper } from 'lib/containers'
import {Text} from 'lib/text'
import { NotFound } from 'components/NotFound'

export const GameList = () => {
     const games = useSelector((store)=>store.gameStore.gameList)
console.log("games", games)

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchGames())
},[])



  return(
    <Page>
    <PageTitle>Games</PageTitle>
    {games && <Wrapper>{
            games.map((game)=>{
      return(<GameCard info={game} />)
    })
    }
     </Wrapper>}
    {!games.length && <NotFound />}
   
    </Page>

  )
}