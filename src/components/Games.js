import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, StyledLink } from 'lib/shared'
import { PageTitle, Text } from 'lib/text'
import { GameCard } from './GameCard'
import { Wrapper } from 'lib/containers'

export const Games = () => {
  const games = useSelector((store)=>store.gameStore.gameList)
console.log(games)
  return(
    <Page>
    <PageTitle>Games</PageTitle>
    <Wrapper>
        {games.map((game)=>{
      return(<GameCard info={game} />)
    })}
    </Wrapper>
    </Page>
  )
}