import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../components/Login';
import { User } from '../components/User';
import { Page } from 'lib/containers';
import { PageTitle } from 'lib/text';

export const UserPage = () => {
  const user = useSelector((state)=>state.userStore.user)

	return (
		<Page>
			<PageTitle>{user.name}</PageTitle>
{user.name ? <User user={user} /> : <Login />}
		</Page>
	);
};
