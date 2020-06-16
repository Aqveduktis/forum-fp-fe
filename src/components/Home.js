import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from 'lib/containers';
import { PageTitle } from 'lib/text';
import { fetchMessage } from 'reducers/messageStore';
import { Wrapper } from 'lib/containers';
import { MessageCard } from './MessageCard';
import { TextBox } from './TextBox';
import { NotFound } from './NotFound';

export const Home = () => {
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messageStore.messageList);

	useEffect(() => {
		dispatch(fetchMessage());
	}, []);

	return (
		<Page>
			<PageTitle>Start Page</PageTitle>
      {messages && <Wrapper>
      			{ messages.map((message) => {
					return <MessageCard info={message} />;
				})}
       
			</Wrapper>
      }
      {!messages.length && <NotFound />} 
		
	
      <TextBox slug="general" />
		</Page>
	);
};
