import React from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom';


export const Button = styled.button`
padding: 10px 20px;
background-color: #bb86fc;
color: black;
border: none;
border-radius: 5px;
`
export const SmallButton=styled.button`
background: none;
border: none;
padding: 0;
color: crimson;
font-size: 1.0em;
cursor: pointer;
`


export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #19b3b1;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #bc5f6a;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
