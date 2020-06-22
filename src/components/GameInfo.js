import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { Gallery, PictureBox } from 'lib/containers';
import { Text } from 'lib/text';
import {StarButton} from 'lib/buttons'
import {StarLogo} from 'lib/StarLogo'
import {favoritingGames} from 'reducers/gameStore'

export const GameInfo = ({game}) => {
  const user = useSelector((state)=>state.userStore.user)
  const myGames = useSelector((state) => state.userStore.games);
  const messages = useSelector((state)=>state.messageStore.messageList.filter((message)=>message.game === game.slug))
  const dispatch = useDispatch();

  const handleLike = () => {
		dispatch(favoritingGames(user, game.slug));
	};

  return (
      <div>
        {!user.name && <div>
          <Text>Please login to favorite games</Text>
        </div>}
        {myGames && (
          <StarButton disabled={!user.name} onClick={handleLike} checked={myGames.includes(game.slug)}>
            <StarLogo />
          </StarButton>
        )}
        <Text>Rating: {game.rating}/5 </Text>
        <Text>Released: {game.released} </Text>
        <Text size={1.3}>Genres:</Text>
        <Gallery>
          {game.genres.map((genre) => (
            <PictureBox key={genre.id} background={genre.image_background}>
              <Link to={`/genres/${genre.slug}`}>{genre.name}</Link>
            </PictureBox>
            
          ))}
        </Gallery>
        <Text size={1.3}>Comments:</Text>
        {messages &&
          messages.map((post) => (
               <Text key={post._id}>
                {post.message} - {post.user.name}
              </Text>
          )
           
          )}
      </div>
  )
}

