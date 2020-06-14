import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
	width: ${(props) => props.width || 100}px;
	height: ${(props) => props.width || 100}px;
	margin: 10px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid ${(props) => props.color || 'white'};

	svg {
		fill: ${(props) => props.color || 'white'};
		width: 60%;
	}
`;

const Star = styled.svg`
fill: ${props=>(props.clicked ? "yellow" :"none")};
stroke: yellow;
width: 100px;
height: 100px;

&:hover {
  fill: yellow;
}
`



export const StarLogo = ({clicked}) => {
	return (
    <Star clicked={clicked} viewBox="0 0 60 60">
      <path
        d="M46.296 51.906l-14.38-9.431-14.413 9.38 4.526-16.591-13.375-10.81 17.177-.822 6.148-16.06 6.09 16.082 17.174.884L41.83 35.299l4.467 16.607z"
       transform="matrix(.98686 0 0 1.03704 .471 1.16)"
        strokeWidth={2}
      />
    </Star>
	);
};
// transform="matrix(.98686 0 0 1.03704 .471 1.16)"