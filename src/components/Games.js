import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, StyledLink } from 'lib/shared'
import { PageTitle, Text } from 'lib/text'

export const Games = () => {
  const games = useSelector((store)=>store.gameStore.gameList)
console.log(games)
  return(
    <Page>
    <PageTitle>Games</PageTitle>
        {games.map((game)=>{
      return(<StyledLink to={`/games/${game.id}`}>{game.name}</StyledLink>)
    })}
    </Page>
  )
}