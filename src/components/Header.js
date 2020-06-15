import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
 import Loader from 'react-loader-spinner'
import styled, {keyframes} from 'styled-components';
import { Title, Text, StyledLink, Loading } from 'lib/text';
import { Banner, LinkNav } from 'lib/containers';
import { UserLogo } from 'lib/UserLogo';

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

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
			{isLoading && <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={75}
         width={75}
 
      />}
    </Banner>
		</>
	);
};
