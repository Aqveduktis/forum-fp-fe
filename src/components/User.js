import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button, SmallButton } from 'lib/shared'
import { Text, SmallLink } from 'lib/text'
import {logout, addingUser, deleteUser} from '../reducers/userStore'
import { deleteMessage } from 'reducers/messageStore'
import { useHistory } from 'react-router'
import { Gallery, Banner, Card, Wrapper } from 'lib/containers'
import { Warning } from 'lib/Warning'

const Triangle = styled.button`
background: none;
border: none;
cursor: pointer;
&: hover {
  opacity: 0.3;
}

p {
  color: yellow;
  margin: 0;
}

`


export const User = ({user}) => {
  const myMessages = useSelector((state)=>state.userStore.messages)
  const myGames = useSelector((state)=>state.userStore.games)
  const history = useHistory()
  console.log("games", myGames)
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
    <Button onClick={handleLogout}>Log out</Button>
     <Text size={1.3}>My messages</Text>
    <Card>
      
    {myMessages && myMessages.map((message)=>{
      return(<Banner>
    <Text>{message.message} - </Text><SmallButton onClick={()=>handleRemove(message)}>remove</SmallButton></Banner> )
    })}    
    </Card>
    <Banner>
       <div>
    <Text size={1.3}>My Favorite games</Text>
    {myGames && myGames.map((game)=>{return<SmallLink to={`/games/${game}`}>{game}</SmallLink>})}
    </div>
    <Triangle onClick={handleDelete}><Warning /><p>Delete myself</p></Triangle>
    </Banner>
    </div>
  )
}