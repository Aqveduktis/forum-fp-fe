import styled from 'styled-components'

export const LogoWrapper = styled.div`
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
export const WarningSign = styled.svg`
  width: 100px;
  height: 100px;
  fill: yellow;
  stroke: black;
`
export const Image = styled.img`
  width: 400px;
  haight: 400px;
  max-width: 100%;
  object-fit: cover;

`