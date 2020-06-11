import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import styled, {keyframes} from 'styled-components';
import {StyledLink} from '../lib/shared'
import { Title, Text } from 'lib/text';
import { Banner } from 'lib/containers';
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
const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

`


const Loading = styled.p`
font-size: 20px;
font-width: bold;
animation: ${colorChanging} 5s linear infinite;
`


export const Header = () => {
	const isLoading = useSelector((state)=>state.userStore.isLoading)
	const name = useSelector((state)=>state.userStore.user.name)
	return (
		<>
    <Banner>
      <Title to="/">My Forum</Title>
			<Wrapper><UserLogo size={100} /><Text>{ name ? name : "please login"}</Text></Wrapper>
			
    </Banner>
		<Banner>
		<LinkNav>
				<StyledLink to="/user">User</StyledLink>
				<StyledLink to="/games">About</StyledLink>
			</LinkNav>
			{isLoading && <Loading>Loading</Loading>}
    </Banner>
		</>
	);
};
