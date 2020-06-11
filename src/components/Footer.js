import React from 'react';
import { StatusMessages } from './StatusMessages';
import { Banner } from 'lib/containers';

export const Footer = () => {
	return (
		<Banner>
			<StatusMessages />
		</Banner>
	);
};
