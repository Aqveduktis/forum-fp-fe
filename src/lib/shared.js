import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Box = styled.div`
background-color: #121212;
width: 95vw;
margin: 0 auto;

@media (min-width: 1200px) {
  width: 1080px;
}
`

export const Page = styled.section`
padding: 1.0em;

`

export const Button = styled.button`
padding: 10px 20px;
background-color: #bb86fc;
color: black;
border: none;
border-radius: 5px;
`
export const StyledLink = styled(Link)`
margin: 10px;
color: #03dac5;
font-weight: bold;
border-bottom: 2px solid #03dac5; 
text-decoration: none;
`;

