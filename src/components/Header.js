import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {StyledLink} from '../lib/shared'
import { Title } from 'lib/text';

const LinkNav = styled.nav`
margin: 10px 0;

.active {
  color: silver;
}
`


export const Header = () => {
	return (
		<div>
      <Title>My Forum</Title>
			<LinkNav>
				<StyledLink to="/">Home</StyledLink>
				<StyledLink to="/user">User</StyledLink>
				<StyledLink to="/games">About</StyledLink>
			</LinkNav>
		</div>
	);
};
