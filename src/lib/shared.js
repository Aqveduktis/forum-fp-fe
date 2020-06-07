import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  background-color: #222;
  width: 250px;
  height: 300px;
  border-radius: 50px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    color: white;
  }
`
export const FormTitle = styled.h3`
  color: silver;
`

export const TextInput = styled.input`
  width: 80%;
  height: 20px;
  border-radius: 20px;
  padding: 5px;
  background-color: unset;
  border: 2px solid #888;
`
export const Submit = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 20px;
  border: none;
  background-color: #6B1DC3;
  color: white;
`


export const Button = styled.button`
padding: 10px 20px;
background-color: #bb86fc;
color: black;
border: none;
border-radius: 5px;
`
export const StyledLink = styled(NavLink)`
margin: 10px;
font-size: 1.5em;
color: #03dac5;
font-weight: bold;
border-bottom: 2px solid #03dac5; 
text-decoration: none;
`;

export const Frame = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
input {
  background-color: unset;
  color: white;
  height: 50px;
  width: 200px;
  max-width: 70%;
  border: 2px solid white;
}
label {
  color: white;
}
`


export const Legend = styled.legend`
background-color: white;
color: orange;

`


