import React from 'react';
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import styled from 'styled-components'
import { Card } from 'lib/containers';
import { Text } from 'lib/text';

const Article = styled.article`
width: 300px;
max-width: 100%;
margin: 10px 0;
border: 1px solid gray;

`
const Box = styled.div`
width: 100%;
border-top: 1px solid gray;
border-bottom: 1px solid gray;
`



export const MessageCard = ({ info }) => {
	return (
    <Article>
    <Link to={ (info.game !== 'general') ? `/games/${info.game}`  : '/games'}>{info.game}</Link>
    <Box>
    		<Text>{info.message}</Text>
			<Text>{info.user.name}</Text>
    </Box>
    <Text><Moment fromNow>{info.createdAt}</Moment></Text>
    </Article>
	);
};
