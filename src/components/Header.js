import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(Link)`
color: indigo;
font-weight: bold;
`;

export const Header = () => {
	return (
		<div>
			<h1>My Forum</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/user">User</Link>
				<StyledLink to="/games">About</StyledLink>
			</nav>
		</div>
	);
};
