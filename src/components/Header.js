import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import styled, {keyframes} from 'styled-components';
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
const colorChanging = keyframes`
0%   {color: white;}
50%  {color: black;}
100% {color: white;}

`



const Loading = styled.p`
font-size: 20px;
font-width: bold;
animation: ${colorChanging} 5s linear infinite;

`


export const Header = () => {
	const isLoading = useSelector((state)=>state.userStore.isLoading)
	return (
		<>
    <Banner>
      <Title to="/">My Forum</Title>
			<UserLogo size={100} />
    </Banner>
		<Banner>
		<LinkNav>
				<StyledLink to="/user">User</StyledLink>
				<StyledLink to="/games">About</StyledLink>
			</LinkNav>
			{isLoading && <Loading>Loading</Loading>}
    </Banner>
	
    <StatusMessages />
		<Result />
		</>

	);
};
