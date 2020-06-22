import styled from 'styled-components';
import { Link } from 'react-router-dom';
//#1F2933;
export const Box = styled.div`
	background-color: #1f2933;
	width: 95vw;
	margin: 0 auto;

	@media (min-width: 1200px) {
		width: 1080px;
	}
`;

export const Page = styled.section`
  padding: 1.0em;
`

export const TopBanner = styled.section`
  padding: 1.0em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    @media (max-width: 576px) {
      flex-direction: column;
      justify-content: center;
    }
  `


export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
`

export const Card = styled.article`
  width: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Banner = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 576px) {
		flex-wrap: wrap;
	}
`

export const LinkNav = styled.nav`
	margin: 10px 0;

	.active {
		color: #bc7a94;
		border-color: #bc7a94;
	}
`;
export const Gallery = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border: 5px solid black;
	}
`

export const CardLink = styled(Link)`
  width: 30%;
  text-decoration: none;

  @media (max-width: 576px) {
    width: 100%;
  }
`
export const Article = styled.article`
	width: 100%;
	background-color: darkslategray;
	color: white;

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
	h2 {
		text-align: center;
		height: 100px;
	}
`;
export const PictureBox = styled.div`
	width: 100px;
	max-width: 33vw;
	height: 100px;
  margin: 0 10px 10px 0;
	background: ${(props) => `url(${props.background})` || 'darkslategray'};
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		color: white;
    background-color: black;
    opacity: 0.7;
		font-size: 1.2em;
		text-align: center;
		text-shadow: 1px 1px black;
	}
`;
export const Container = styled.article`
  width: 300px;
  max-width: 100%;
  height: 100px;
  min-height: auto;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid gray;
   p{
     margin: 0 0 1em 0;
   }
` 

export const BigBox = styled.article`
  width: 300px;
  max-width: 100%;
  margin: 10px 0;
  border: 1px solid gray;
  p {
    margin: 8px 16px;
  }
  a {
    margin: 8px 16px;
  }
`
export const SmallBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`