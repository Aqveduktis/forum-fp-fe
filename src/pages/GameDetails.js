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
import { TextBox } from 'components/TextBox';
import { StarLogo } from 'lib/StarLogo';

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
const StarButton = styled.button`
background: none;
border: none;
cursor: pointer;
`


export const GameDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch()
  const [textMessage, setTextMessage] = useState("")

  const user = useSelector(state=>state.userStore.user)
  const posts = useSelector((state)=>state.messageStore.messageList.filter((item)=>(item.game == slug)))
    const game = useSelector(state => state.gameStore.selectedGame)
  const myGames = useSelector((state)=>state.userStore.games)
  //const postMessage
useEffect(()=>{
dispatch(fetchOneGame(slug))
},[slug])

  const handleForm = (event) => {
    event.preventDefault()
    dispatch(postMessage(user, textMessage, game.slug))
    setTextMessage("")
  }
  const handleLike = () => {
    dispatch(addingSlug(user, slug))
  }
  
  return(
    <Page>
    <PageTitle>Game Detail</PageTitle>
    {myGames && <StarButton onClick={handleLike} disabled={myGames.includes(slug)}>
     <StarLogo clicked={myGames.includes(slug)} /></StarButton>}
    <Banner>
    <div>
        {game && <Text>{game.name}</Text>}
    {!game && <Text>404 game not found</Text>}
    {user.name && <Text>{user.name}</Text>}
    {!user.name && <Text>please login</Text>}
    <Text> {game.rating} </Text>
     <Text> {game.released} </Text>
     <Text>Comments</Text>
     {posts && posts.map((post)=>{
      return(
        <Text>{post.message}</Text>
      )
    })}
    </div>
    <TextBox slug={slug} />
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