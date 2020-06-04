import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const GameList = () => {
const dispatch = useDispatch()
const games = useSelector((store)=>store.gameStore.gameList)
  return(
    <div>
    Hello from games
    </div>
  )
}