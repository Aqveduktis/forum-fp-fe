import React from 'react';
import styled from 'styled-components';



export const StarLogo = ({clicked}) => {
	return (
    <svg title="Star for favoriting" width="75" viewBox="0 0 60 60">
      <path
        d="M46.296 51.906l-14.38-9.431-14.413 9.38 4.526-16.591-13.375-10.81 17.177-.822 6.148-16.06 6.09 16.082 17.174.884L41.83 35.299l4.467 16.607z"
       transform="matrix(.98686 0 0 1.03704 .471 1.16)"
        strokeWidth={2}
      />
    </svg>
	);
};
