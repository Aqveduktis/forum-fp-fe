import React from 'react';
import { StatusMessages } from './StatusMessages';
import { Banner } from 'lib/containers';
import { StarLogo } from 'lib/StarLogo';

export const Footer = () => {
	return (
		<Banner>
			<StatusMessages />
		</Banner>
	);
};
