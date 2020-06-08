import React from 'react';
import Moment from 'react-moment';
import { Card } from 'lib/containers';
import { Text } from 'lib/text';

export const MessageCard = ({ info }) => {
	return (
		<Card>
			<Text>{info.message}</Text>
			<Text>{info.user.name}</Text>
			<Text>{info.game}</Text>
			<Text><Moment fromNow>{info.createdAt}</Moment></Text>
		</Card>
	);
};
