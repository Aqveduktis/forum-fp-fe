import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {gameStore, fetchGames} from '../reducers/gameStore'
import { Games } from 'components/Games'

export const GameList = () => {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchGames())
},[])



  return(
    <div>
    Hello from games
    <Games />
    </div>
  )
}