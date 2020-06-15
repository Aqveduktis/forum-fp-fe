import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Login } from '../components/Login';
import { User } from '../components/User';
import { Page } from 'lib/containers';
import { PageTitle, Text } from 'lib/text';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from 'lib/shared';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const UserPage = () => {
  const user = useSelector((state)=>state.userStore.user)

	return (
		<Page>
			<PageTitle>{user.name}</PageTitle>
{user.name ? <User user={user} /> : <Login />}
		</Page>
	);
};
