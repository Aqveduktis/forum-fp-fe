import React from 'react';
import { CardLink } from 'lib/containers';

export const GameCard = ({ info }) => {
	return (
		<CardLink to={`/games/${info.slug}`} background={info.backgroundImage}>
				<h2>{info.name}</h2>
		</CardLink>
	);
};
