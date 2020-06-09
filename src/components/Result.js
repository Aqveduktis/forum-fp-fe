import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'lib/text';

export const Result = () => {
	const myName = useSelector((state) => state.userStore.user.name);
	const loading = useSelector((state) => state.userStore.isLoading);
	return (
		<div>
			{myName && <Text>current user {myName}</Text>}
			{loading && <Text>Loading</Text>}
		</div>
	);
};
