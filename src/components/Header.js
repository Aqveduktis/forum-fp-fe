import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {StyledLink} from '../lib/shared'
import { Title } from 'lib/text';
import { Banner } from 'lib/containers';
import {Result} from '../components/Result'
import { StatusMessages } from './StatusMessages';
import { UserLogo } from 'lib/UserLogo';


const LinkNav = styled.nav`
margin: 10px 0;

.active {
  color: silver;
}
`


export const Header = () => {
	return (
		<>
    <Banner>
      <Title to="/">My Forum</Title>
			<UserLogo size={100} />
    </Banner>
		<LinkNav>
				<StyledLink to="/user">User</StyledLink>
				<StyledLink to="/games">About</StyledLink>
			</LinkNav>
    <StatusMessages />
		<Result />
		</>

	);
};
