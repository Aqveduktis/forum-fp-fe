import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'lib/text';

export const StatusMessages = () => {
	const loginText = useSelector((state) => state.userStore.loginMessage);
	const registerText = useSelector((state) => state.userStore.registerMessage);
	const gameText = useSelector((state) => state.gameStore.fetchingStatus);
	const messageText = useSelector((state) => state.messageStore.messageStatus);
	return (
		<div>
		<Text>{loginText}</Text>
			<Text>{registerText}</Text>
			<Text>{gameText}</Text>
      <Text>{messageText}</Text>
		</div>
	);
};
	
			