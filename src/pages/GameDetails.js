import React from 'react'
import {useParams} from 'react-router-dom'
import { Page } from 'lib/shared';
import { PageTitle, Text } from 'lib/text';
import { useSelector } from 'react-redux';
export const GameDetails = () => {
  const { id } = useParams();
  const game = useSelector(state => state.gameStore.gameList.find((item)=>item.id == id))
  const user = useSelector(state=>state.userStore.user)
  console.log(user)
  return(
    <Page>
    <PageTitle>Game Detail</PageTitle>
    {game && <Text>{game.name}</Text>}
    {!game && <Text>404 game not found</Text>}
    {user.name && <Text>{user.name}</Text>}
    {!user.name && <Text>please login</Text>}
    </Page>
  )
}