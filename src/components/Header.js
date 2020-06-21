import React from 'react';
import {useSelector} from 'react-redux'
 import Loader from 'react-loader-spinner'
import styled from 'styled-components';
import { Title, Text, StyledLink } from 'lib/text';
import { LinkNav, TopBanner } from 'lib/containers';
import { UserLogo } from 'lib/UserLogo';

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

`
export const Header = () => {
	const isLoading = useSelector((state)=>state.statusStore.isLoading)
	const name = useSelector((state)=>state.userStore.user.name)
	return (
		<>
    <TopBanner>
          <Title to="/">My Forum</Title>
			<Wrapper><UserLogo size={100} /><Text>{ name ? name : "please login"}</Text></Wrapper>
    </TopBanner>
    <TopBanner>
    		<LinkNav>
				<StyledLink to="/user">User</StyledLink>
				<StyledLink to="/games">About</StyledLink>
			</LinkNav>
			{isLoading && <Loader
         type="ThreeDots"
         color="silver"
         height={75}
         width={75}
 
      />}
    </TopBanner>
		</>
	);
};
