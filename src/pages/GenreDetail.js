import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Page, Banner, Gallery, PictureBox } from 'lib/containers';
import { PageTitle, Text } from 'lib/text';

export const GenreDetail = () => {
	const { slug } = useParams();
	return (
		<Page>
			<PageTitle>{slug}</PageTitle>
		</Page>
	);
};
