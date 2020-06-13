import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardLink = styled(Link)`
width: 30%;
text-decoration: none;
@media (max-width: 576px) {
  width: 100%;
}
`
;

const Article = styled.article`
	width: 100%;
	background-color: darkslategray;
	color: white;

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
	h2 {
		text-align: center;
    height: 100px;
	}
`;

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
