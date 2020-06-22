import styled from 'styled-components'

export const Button = styled.button`
padding: 10px 20px;
background-color: #bc5f6a;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
  background-color: crimson;
}
`
export const HeartButton = styled.button`
  background: none;
  border: none;
	width: ${(props) => props.width*1.5 || 150}px;
	height: ${(props) => props.width || 100}px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
		fill: ${(props) => props.color || 'white'};
		width: 50%;
    height: 100%;
	}
  p {
    color: ${(props) => props.color || 'white'};
    font-size: ${(props) => props.width*0.3 || 50}px;
  }
`
export const SmallButton=styled.button`
background: none;
border: none;
padding: 0;
color: crimson;
font-size: 1.0em;
cursor: pointer;
`
export const Triangle = styled.button`
background: none;
border: none;
cursor: pointer;
&: hover {
  opacity: 0.3;
}

p {
  color: yellow;
  margin: 0;
}

`
export const StarButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;

  &:hover:enabled svg {
    fill: yellow;
  }

  &:disabled svg {
    stroke: silver;
  }
`;

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
export const Image = styled.img`
  width: 400px;
  haight: 400px;
  max-width: 100%;
  object-fit: cover;

`
