import React from 'react';
import { CardLink, Article } from 'lib/containers';

export const GameCard = ({ info }) => {
	return (
		<CardLink to={`/games/${info.slug}`}>
			<Article>
				<img src={info.backgroundImage} />
				<h2>{info.name}</h2>
			</Article>
		</CardLink>
	);
};
