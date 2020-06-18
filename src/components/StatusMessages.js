import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'lib/text';

export const StatusMessages = () => {
	const errorMessage = useSelector((state) => state.statusStore.errorMessage);
	const statusMessage = useSelector((state) => state.statusStore.statusMessage);

	// window.setTimeout(function() {
	// 	alert('Hello World!');
	// }, 500);

	return (
		<div>
			<Text color="palevioletred">{errorMessage}</Text>
			<Text color="palegreen">{statusMessage}</Text>
		</div>
	);
};
