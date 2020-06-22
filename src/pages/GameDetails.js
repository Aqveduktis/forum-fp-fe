import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Page, Banner, Gallery } from 'lib/containers';
import { PageTitle } from 'lib/text';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneGame  } from 'reducers/gameStore';
import { TextBox } from 'components/TextBox';
import { NotFound } from 'components/NotFound';
import { GameInfo } from 'components/GameInfo';


export const GameDetails = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.statusStore.isLoading);
	const game = useSelector((state) => state.gameStore.selectedGame);
	
	//const postMessage
	useEffect(
		() => {
			dispatch(fetchOneGame(slug));
		},
		[ slug, dispatch ]
	);

	return (
		<Page>
			<PageTitle>{game.name}</PageTitle>
			{game.slug && (
				<div>
					<Banner>
            <GameInfo game={game} />
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
