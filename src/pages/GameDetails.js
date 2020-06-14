import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {Page, Banner} from 'lib/containers'
import { Button } from 'lib/shared';
import { PageTitle, Text } from 'lib/text';
import { useSelector, useDispatch } from 'react-redux';
import {postMessage} from 'reducers/messageStore'
import { fetchOneGame } from 'reducers/gameStore';
import { addingSlug } from 'reducers/userStore';

const Gallery = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 5px solid black;
}
`


export const GameDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch()
  const [textMessage, setTextMessage] = useState("")

  const user = useSelector(state=>state.userStore.user)
  const posts = useSelector((state)=>state.messageStore.messageList.filter((item)=>(item.game == slug)))
    const game = useSelector(state => state.gameStore.selectedGame)
  console.log("game", game)
  
  console.log(user)
  console.log("posts", posts)
  //const postMessage
useEffect(()=>{
dispatch(fetchOneGame(slug))
},[slug])

  const handleForm = (event) => {
    event.preventDefault()
    dispatch(postMessage(user, textMessage, game.slug))
  }
  const handleLike = () => {
    dispatch(addingSlug(user, slug))
  }
  return(
    <Page>
    <PageTitle>Game Detail</PageTitle>
    <Button onClick={handleLike}>Like this Game</Button>
    <Banner>
    <div>
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
    </div>
        <form onSubmit={handleForm}>
      <fieldset>
    <legend>Simple fieldset</legend>
  <textarea value={textMessage} onChange={(e)=>setTextMessage(e.target.value)} />
 <Button>submit</Button>
  </fieldset>
    </form>
    </Banner>

    <Gallery>
    {game.screenshots && game.screenshots.map((picture)=>{
      return(
        <img src={picture.image} />
      )
    })}
        
    </Gallery>

    </Page>
  )
}