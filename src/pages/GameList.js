import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../reducers/gameStore';
import { Page } from 'lib/containers';
import { PageTitle } from 'lib/text';
import { GameCard } from '../components/GameCard';
import { Wrapper } from 'lib/containers';
import { SelectWrapper, Select } from 'lib/form';
import { NotFound } from 'components/NotFound';

export const GameList = () => {
	const [ genre, setGenre ] = useState('');
	const loading = useSelector((state) => state.statusStore.isLoading);
	const games = useSelector((store) =>
		store.gameStore.gameList.filter((game) => {
			return game.genres.find((item) => item.slug.includes(genre));
		})
	);
	console.log('games', games);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGames());
	}, [dispatch]);

	return (
		<Page>
			<PageTitle>Games</PageTitle>
			<div>
				<SelectWrapper>
					<Select value={genre} onChange={(e) => setGenre(e.target.value)}>
						<option value="">All</option>
						<option value="action">Action</option>
						<option value="adventure">Adventure</option>
						<option value="indie">Indie</option>
						<option value="puzzle">Puzzle</option>
						<option value="shooter">Shooter</option>
					</Select>
				</SelectWrapper>
			</div>
			{games && (
				<Wrapper>
					{games.map((game) => {
						return <GameCard key={game._id} info={game} />;
					})}
				</Wrapper>
			)}
			{!games.length && !loading && <NotFound />}
		</Page>
	);
};
