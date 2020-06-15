import React from 'react';
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import styled from 'styled-components'
import { Card, Banner } from 'lib/containers';
import { Text, SmallLink } from 'lib/text';
import { useDispatch } from 'react-redux';
import { likeMessage } from 'reducers/messageStore';
import {HeartLogo} from 'lib/HeartLogo'
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

const HeartButton = styled.button`
  background: none;
  border: none;
	width: ${(props) => props.width*1.5 || 150}px;
	height: ${(props) => props.width || 100}px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
		fill: ${(props) => props.color || 'white'};
		width: 50%;
    height: 100%;
	}
  p {
    color: ${(props) => props.color || 'white'};
    font-size: ${(props) => props.width*0.3 || 50}px;
  }
`


export const MessageCard = ({ info }) => {
  const dispatch = useDispatch()
  const handleLike = () => {
    dispatch(likeMessage(info))
  }
	return (
    <Article>
    <SmallLink to={ (info.game !== 'general') ? `/games/${info.game}`  : '/games'}>{info.game}</SmallLink>
    <Box>
    		<Text>{info.message}</Text>
			<Text>{info.user.name}</Text>
    </Box>
    <Banner> <Text><Moment fromNow>{info.createdAt}</Moment></Text>
    <HeartButton color="palevioletred" width="50" onClick={handleLike}><HeartLogo /><p>{info.likes}</p></HeartButton></Banner>
    </Article>
	);
};
