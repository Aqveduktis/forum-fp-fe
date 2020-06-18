import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'lib/text';
import { statusStore } from 'reducers/statusStore';

export const StatusMessages = () => {
	const errorMessage = useSelector((state) => state.statusStore.errorMessage);
	const statusMessage = useSelector((state) => state.statusStore.statusMessage);
	const dispatch = useDispatch();

	if (errorMessage || statusMessage) {
		window.setTimeout(() => {
			dispatch(statusStore.actions.setStatusMessage(null));
			dispatch(statusStore.actions.setErrorMessage(null));
		}, 10000);
	}

	return (
		<div>
			<Text color="palevioletred">{errorMessage}</Text>
			<Text color="palegreen">{statusMessage}</Text>
		</div>
	);
};
