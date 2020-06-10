import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from 'lib/containers';
import { PageTitle, Text } from 'lib/text';
import { fetchMessage, postMessage } from 'reducers/messageStore';
import { Card, Wrapper } from 'lib/containers';
import { Frame, Submit } from 'lib/shared';
import { MessageCard } from './MessageCard';
import { TextBox } from './TextBox';

export const Home = () => {
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messageStore.messageList);
	const user = useSelector((state) => state.userStore.user);
	const [ text, setText ] = useState('');
	const slug = 'general';

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(postMessage(user, text, slug));
	};

	useEffect(() => {
		dispatch(fetchMessage());
	}, []);

	return (
		<Page>
			<PageTitle>Start Page</PageTitle>
			<Wrapper>
				{messages && messages.map((message) => {
					return <MessageCard info={message} />;
				})}
       {!messages.length && <Text>404 no messages</Text>} 
			</Wrapper>
      <TextBox slug="general" />
		</Page>
	);
};
