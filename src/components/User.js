import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from 'lib/shared'
import { Text } from 'lib/text'
import {logout, addingUser} from '../reducers/userStore'

export const User = ({user}) => {
  const myMessages = useSelector((state)=>state.userStore.messages)
  const myGames = useSelector((state)=>state.userStore.games)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addingUser(user))
  },[user])

  const handleLogout = () => {
    dispatch(logout())
  }

  return(
    <div>
    {user.name}
    {myMessages && myMessages.map((message)=>(<Text>{message.message}</Text>) )}
    {myGames && myGames.map((game)=>(<Text>{game.name}</Text>) )}
    <Button onClick={handleLogout}>Log out</Button>
    </div>
  )
}