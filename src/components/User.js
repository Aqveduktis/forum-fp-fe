import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from 'lib/shared'
import { Text } from 'lib/text'
import {logout, addingUser, deleteUser} from '../reducers/userStore'
import { deleteMessage } from 'reducers/messageStore'
import { useHistory } from 'react-router'

export const User = ({user}) => {
  const myMessages = useSelector((state)=>state.userStore.messages)
  const myGames = useSelector((state)=>state.userStore.games)
  const history = useHistory()

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addingUser(user))
  },[user])

  const handleLogout = () => {
    dispatch(logout())
  }
  const handleDelete = () => {
    dispatch(deleteUser(user))
  }
  const handleRemove = (message) => {
    dispatch(deleteMessage(message, user))  
  }

  return(
    <div>
    {user.name}
    {myMessages && myMessages.map((message)=>(<div>
    <Text>{message.message}</Text> <Button onClick={()=>handleRemove(message)}>remove this message</Button></div>) 
    )}
    {myGames && myGames.map((game)=>(<Text>{game.name}</Text>) )}
    <Button onClick={handleLogout}>Log out</Button>
    <Button onClick={handleDelete}>Delete myself!</Button>
    </div>
  )
}