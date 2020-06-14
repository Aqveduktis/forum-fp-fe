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
    <Heart width="30" viewBox="0 0 16.933 16.933">
      <path
        d="M5.543 1.726c-1.397.128-2.315.541-3.13 1.332H2.41C.738 4.76.738 7.465 2.346 9.201c.02.05.05.096.088.135h.002l5.74 5.754a.397.397 0 00.56.002l5.74-5.73.014-.013.006-.006.03-.027.011-.012a4.467 4.467 0 00-.07-6.293C12.81 1.385 10.22 1.365 8.48 2.843c-.848-.729-1.885-1.129-2.938-1.117zm.01.79A3.655 3.655 0"
         strokeWidth={0.5}

      />
    </Heart>

	);
};

      // <path
      //   d="M5.543 1.726c-1.397.128-2.315.541-3.13 1.332H2.41C.738 4.76.738 7.465 2.346 9.201c.02.05.05.096.088.135h.002l5.74 5.754a.397.397 0 00.56.002l5.74-5.73.014-.013.006-.006.03-.027.011-.012a4.467 4.467 0 00-.07-6.293C12.81 1.385 10.22 1.365 8.48 2.843c-.848-.729-1.885-1.129-2.938-1.117zm.01.79A3.655 3.655 0 018.15 3.557l.026.026.013.013a.397.397 0 00.229.114c.006 0 .013 0 .02.002a.398.398 0 00.039 0 .395.395 0 00.117-.02 3.632 3.632 0 00.037-.014l.017-.008.018-.01.006-.004.012-.006.004-.004.001-.002a.395.395 0 00.063-.049 3.661 3.661 0 015.16-.02 3.66 3.66 0 01.059 5.17l-.002.002-.028.026-.011.013a.3.3 0 00-.024.024l-5.449 5.437L3.019 8.8a3.661 3.661 0 01-.047-5.182c.002 0 .003-.002.005-.003h.001a3.656 3.656 0 012.575-1.1z"
      //    strokeWidth={0.5}

      // />

        // style={{
        //   lineHeight: "normal",
        //   fontVariantLigatures: "normal",
        //   fontVariantPosition: "normal",
        //   fontVariantCaps: "normal",
        //   fontVariantNumeric: "normal",
        //   fontVariantAlternates: "normal",
        //   fontFeatureSettings: "normal",
        //   textIndent: 0,
        //   textAlign: "start",
        //   textDecorationLine: "none",
        //   textDecorationStyle: "solid",
        //   textDecorationColor: "#000",
        //   textTransform: "none",
        //   textOrientation: "mixed",
        //   whiteSpace: "normal",
        //   shapePadding: 0,
        //   isolation: "auto",
        //   mixBlendMode: "normal",
        //   solidColor: "#000",
        //   solidOpacity: 1,
        // }}
        //         color="#000"
        // fontWeight={400}
        // fontFamily="sans-serif"
        // overflow="visible"
        // paintOrder="fill markers stroke"