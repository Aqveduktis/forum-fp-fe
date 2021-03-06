import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'

export const Text = styled.p`
color: ${props=> props.color ||"white"};
font-size: ${props=> props.size ||"1.0"}em;

`
export const Disclaimer = styled.p`
color: gray;

a {
  color: gray;
  text-decoration: none;
  &:hover {
    color: thistle;
  }
}
`

export const PageTitle = styled.h2`
margin: 0;
color: silver;
font-size: 1.8em;
text-transform: uppercase;

`
export const Title = styled(Link)`
width: auto;
font-size: 2.5em;
padding: 10px;
color: #7986a7;
border: 1px solid #7986a7;
text-decoration: none;
`

export const StyledLink = styled(NavLink)`
margin-right: 1em;
font-size: 1.5em;
color: silver;
font-weight: bold;
border-bottom: 2px solid silver; 
text-decoration: none;
&:hover{
  color: #bc7a94;
  border-color: #bc7a94;
}
`;
//#03dac5;

export const NormalLink = styled(Link)`
padding: 10px 20px;
background-color: #bc5f6a;
color: white;
text-decoration: none;
border-radius: 5px;
&:hover {
  background-color: crimson;
}
`
export const SmallLink = styled(Link)`
color: cyan;
text-decoration: none;
display: block;
cursor: pointer;
&:hover {
  color: lightgray;
}
`