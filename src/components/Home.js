import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from 'lib/shared';
import { PageTitle, Text } from 'lib/text';
import { fetchMessage } from 'reducers/messageStore';
import { Card, Wrapper } from 'lib/containers';
import { MessageCard } from './MessageCard';


export const Home = () => {
const dispatch = useDispatch()
const messages = useSelector((state)=>state.messageStore.messageList)
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
  </Page>
  ) 
};
