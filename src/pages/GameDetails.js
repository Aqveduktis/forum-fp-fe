import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {Page} from 'lib/containers'
import { Button } from 'lib/shared';
import { PageTitle, Text } from 'lib/text';
import { useSelector, useDispatch } from 'react-redux';
import {postMessage} from 'reducers/messageStore'
import { fetchOneGame } from 'reducers/gameStore';

const Gallery = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 5px solid black;
}
`


export const GameDetails = () => {
  const { slug } = useParams();
  console.log(slug)
  const dispatch = useDispatch()
  const [textMessage, setTextMessage] = useState("")

  const user = useSelector(state=>state.userStore.user)
  const posts = useSelector((state)=>state.messageStore.messageList.filter((item)=>(item.game == slug)))
  
  console.log(user)
  console.log("posts", posts)
  //const postMessage
useEffect(()=>{
dispatch(fetchOneGame(slug))
},[])
  const game = useSelector(state => state.gameStore.selectedGame)
  console.log(game)
  const handleForm = (event) => {
    event.preventDefault()
    dispatch(postMessage(user, textMessage, game.slug))
  }
  return(
    <Page>
    <PageTitle>Game Detail</PageTitle>
    {game && <Text>{game.name}</Text>}
    {!game && <Text>404 game not found</Text>}
    {user.name && <Text>{user.name}</Text>}
    {!user.name && <Text>please login</Text>}
    <Text> {game.rating} </Text>
     <Text> {game.released} </Text>
     {posts && posts.map((post)=>{
      return(
        <Text>{post.message}</Text>
      )
    })}
    <Gallery>
    {game && game.screenshots.map((picture)=>{
      return(
        <img src={picture.image} />
      )
    })}
        
    </Gallery>
    <form onSubmit={handleForm}>
      <fieldset>
    <legend>Simple fieldset</legend>
  <input value={textMessage} onChange={(e)=>setTextMessage(e.target.value)} />
  </fieldset>
    <Button>submit</Button>
    </form>
    </Page>
  )
}