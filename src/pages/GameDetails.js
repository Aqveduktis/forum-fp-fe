import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Page} from 'lib/containers'
import { Button } from 'lib/shared';
import { PageTitle, Text } from 'lib/text';
import { useSelector, useDispatch } from 'react-redux';
import {postMessage} from 'reducers/messageStore'
import { fetchOneGame } from 'reducers/gameStore';

export const GameDetails = () => {
  const { slug } = useParams();
  console.log(slug)
  const dispatch = useDispatch()
  const [textMessage, setTextMessage] = useState("")

  const user = useSelector(state=>state.userStore.user)
  console.log(user)
  
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