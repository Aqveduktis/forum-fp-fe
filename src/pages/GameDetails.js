import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Page, Banner, Gallery, PictureBox } from 'lib/containers';
import { PageTitle, Text } from 'lib/text';
import {StarButton} from 'lib/shared'
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneGame, favoritingGames  } from 'reducers/gameStore';
import { TextBox } from 'components/TextBox';
import { StarLogo } from 'lib/StarLogo';
import { NotFound } from 'components/NotFound';


export const GameDetails = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userStore.user);
	const posts = useSelector((state) => state.messageStore.messageList.filter((item) => item.game === slug));
	const loading = useSelector((state) => state.statusStore.isLoading);
	const game = useSelector((state) => state.gameStore.selectedGame);
	const myGames = useSelector((state) => state.userStore.games);
	//const postMessage
	useEffect(
		() => {
			dispatch(fetchOneGame(slug));
		},
		[ slug, dispatch ]
	);

	const handleLike = () => {
		dispatch(favoritingGames(user, slug));
	};

	return (
		<Page>
			<PageTitle>{game.name}</PageTitle>
			{game.slug && (
				<div>
					<Banner>
						<div>
                {!user.name &&
                <div>
                <Text>Please login to favorite games</Text>
                </div>}
							{myGames && (
								<StarButton disabled={!user.name} onClick={handleLike}>
									<StarLogo clicked={myGames.includes(slug)} />
								</StarButton>
							)}
							<Text>Rating: {game.rating}/5 </Text>
							<Text>Released: {game.released} </Text>
							<Text size={1.3}>Genres:</Text>
							<Gallery>
								{game.genres.map((genre) => (
                  <PictureBox background={genre.image_background}>
										<Link to={`/genres/${genre.slug}`}>{genre.name}</Link>
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
							game.screenshots.map((picture, index) => {
								return <img key={picture.id} src={picture.image} alt={`screenshot from ${game.name} number ${index + 1}`} />;
							})}
					</Gallery>
				</div>
			)}
			{!game.slug && !loading && <NotFound />}
		</Page>
	);
};

//  {user.name && <Text>{user.name}</Text>}
//   {!user.name && <Text>please login</Text>}
//    {!game && <Text>404 game not found</Text>}
