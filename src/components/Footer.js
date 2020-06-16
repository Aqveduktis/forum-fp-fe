import React from 'react';
import { StatusMessages } from './StatusMessages';
import { TopBanner } from 'lib/containers';
import { Disclaimer } from 'lib/text';


export const Footer = () => {
	return (
    <TopBanner>
    		<StatusMessages />
      <Disclaimer>The Games was graciously provided by <a href="https://rawg.io">RAWG</a></Disclaimer>
    </TopBanner>
	);
};
