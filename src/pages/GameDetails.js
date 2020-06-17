import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Page, Banner, Gallery, PictureBox } from 'lib/containers';
import { PageTitle, Text } from 'lib/text';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneGame } from 'reducers/gameStore';
import { favoritingGames } from 'reducers/userStore';
import { TextBox } from 'components/TextBox';
import { StarLogo } from 'lib/StarLogo';
import { NotFound } from 'components/NotFound';

const StarButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;

export const GameDetails = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userStore.user);
	const posts = useSelector((state) => state.messageStore.messageList.filter((item) => item.game == slug));
	const game = useSelector((state) => state.gameStore.selectedGame);
	const myGames = useSelector((state) => state.userStore.games);
	//const postMessage
	useEffect(
		() => {
			dispatch(fetchOneGame(slug));
		},
		[ slug ]
	);

	const handleLike = () => {
    dispatch(favoritingGames(user, slug))
	};

	return (
		<Page>
			<PageTitle>{game.name}</PageTitle>
			{game.slug && (
				<div>
					<Banner>
						<div>
							{myGames && (
								<StarButton onClick={handleLike}>
									<StarLogo clicked={myGames.includes(slug)} />
								</StarButton>
							)}
							<Text>Rating: {game.rating}/5 </Text>
							<Text>Released: {game.released} </Text>
							<Text size={1.3}>Genres:</Text>
							<Gallery>
								{game.genres.map((genre) => (
									<PictureBox background={genre.image_background}>
										<p>{genre.name}</p>
									</PictureBox>
								))}
							</Gallery>
							<Text size={1.3}>Comments:</Text>
							{posts &&
								posts.map((post) => {
									return (
										<Text>
											{post.message} - {post.user.name}
										</Text>
									);
								})}
						</div>
						<TextBox slug={slug} />
					</Banner>

					<Gallery>
						{game.screenshots &&
							game.screenshots.map((picture) => {
								return <img src={picture.image} />;
							})}
					</Gallery>
				</div>
			)}
			{!game.slug && <NotFound />}
		</Page>
	);
};

//  {user.name && <Text>{user.name}</Text>}
//   {!user.name && <Text>please login</Text>}
//    {!game && <Text>404 game not found</Text>}
