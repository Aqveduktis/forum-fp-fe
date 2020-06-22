import React from 'react';
import Moment from 'react-moment';
import { Banner, BigBox, SmallBox } from 'lib/containers';
import { HeartButton } from 'lib/buttons';
import { Text, SmallLink } from 'lib/text';
import { useDispatch } from 'react-redux';
import { likeMessage } from 'reducers/messageStore';
import {HeartLogo} from 'lib/HeartLogo'

export const MessageCard = ({ info }) => {
  const dispatch = useDispatch()
  const handleLike = () => {
    dispatch(likeMessage(info))
  }
	return (
    <BigBox>
      <SmallLink to={ (info.game !== 'general') ? `/games/${info.game}`  : '/games'}>{info.game}</SmallLink>
      <SmallBox>
        <Text size="1.4">{info.message}</Text>
        <Text color="gray">user: {info.user.name}</Text>
      </SmallBox>
      <Banner> 
        <Text><Moment fromNow>{info.createdAt}</Moment></Text>
        <HeartButton color="palevioletred" width="50" onClick={handleLike}><HeartLogo /><p>{info.likes}</p></HeartButton>
      </Banner>
    </BigBox>
	);
};
