import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, SmallButton, Triangle } from 'lib/buttons'
import { Text, SmallLink } from 'lib/text'
import {logout, addingUser, deleteUser} from '../reducers/userStore'
import { deleteMessage } from 'reducers/messageStore'
import { Banner, Card } from 'lib/containers'
import { Warning } from 'lib/Warning'




export const User = ({user}) => {
  const myMessages = useSelector((state)=>state.userStore.messages)
  const myGames = useSelector((state)=>state.userStore.games)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addingUser(user))
  },[user, dispatch])

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
    
     <Text size={1.3}>My messages</Text>
    <Card>
      
    {myMessages && myMessages.map((message)=>{
      return(<Banner key={message._id}>
    <Text>{message.message} - </Text><SmallButton onClick={()=>handleRemove(message)}>remove</SmallButton></Banner> )
    })}    
    </Card>
           <div>
    <Text size={1.3}>My Favorite games</Text>
    {myGames && myGames.map((game)=>( <SmallLink key={game} to={`/games/${game}`}>{game}</SmallLink>))}
    </div>
    <Banner>
    <Button onClick={handleLogout}>Log out</Button>
    <Triangle onClick={handleDelete}><Warning /><p>Delete myself</p></Triangle>
    </Banner>
    </div>
  )
}