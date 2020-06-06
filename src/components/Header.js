import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {StyledLink} from '../lib/shared'
import { Title } from 'lib/text';

export const Header = () => {
	return (
		<div>
      <Title>My Forum</Title>
			<nav>
				<StyledLink to="/">Home</StyledLink>
				<StyledLink to="/user">User</StyledLink>
				<StyledLink to="/games">About</StyledLink>
			</nav>
		</div>
	);
};
