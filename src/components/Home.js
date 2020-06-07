import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from 'lib/containers';
import { PageTitle, Text } from 'lib/text';
import { fetchMessage } from 'reducers/messageStore';
import { Card, Wrapper } from 'lib/containers';
import {Frame, Submit} from 'lib/shared'
import { MessageCard } from './MessageCard';



export const Home = () => {
const dispatch = useDispatch()
const messages = useSelector((state)=>state.messageStore.messageList)
const [text, setText] = useState("")
  useEffect(()=>{
    dispatch(fetchMessage())
  },[])

	return (
  <Page>
  <PageTitle>Start Page</PageTitle>
  <Text>Hello from front page</Text>
  <Wrapper>
  {messages.map((message)=>{
   return( <MessageCard info={message} /> )
  })}
  </Wrapper>
  <Frame>
  <label>write something
    <input id="input"
  value={text}
  onChange={(e)=>setText(e.target.value)} />
  </label>
  <Submit>Submit</Submit>
  </Frame>
  </Page>
  ) 
};
