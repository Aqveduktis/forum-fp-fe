import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {gameStore, fetchGames} from '../reducers/gameStore'
import { Games } from 'components/Games'
import { Page } from 'lib/containers'
import { PageTitle } from 'lib/text'

export const GameList = () => {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchGames())
},[])



  return(
    <Page>
    <PageTitle>Games</PageTitle>
      <Games />
    </Page>

  )
}