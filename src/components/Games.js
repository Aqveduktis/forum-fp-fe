import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Games = () => {
  const games = useSelector((store)=>store.gameStore.gameList)
console.log(games)
  return(
    <div>
    <p>Hello from games</p>
    {games.map((game)=>{
      return(<p>{game.name}</p>)
    })}
    </div>
  )
}