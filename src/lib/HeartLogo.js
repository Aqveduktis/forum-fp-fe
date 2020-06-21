import React from 'react';
import styled from 'styled-components';

const Heart = styled.svg`
fill: ${props=>(props.clicked ? "pink" :"none")};
stroke: pink;
width: ${(props) => props.width || 100}px;
height: ${(props) => props.width || 100}px;

&:hover {
  fill: pink;
}
`



export const HeartLogo = () => {
	return (
    <Heart title="Heart for liking" width="30" viewBox="0 0 16.933 16.933">
      <path
        d="M5.543 1.726c-1.397.128-2.315.541-3.13 1.332H2.41C.738 4.76.738 7.465 2.346 9.201c.02.05.05.096.088.135h.002l5.74 5.754a.397.397 0 00.56.002l5.74-5.73.014-.013.006-.006.03-.027.011-.012a4.467 4.467 0 00-.07-6.293C12.81 1.385 10.22 1.365 8.48 2.843c-.848-.729-1.885-1.129-2.938-1.117zm.01.79A3.655 3.655 0"
         strokeWidth={0.5}

      />
    </Heart>

	);
};
