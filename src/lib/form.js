import styled from 'styled-components';

//prussian blue: #003153
//morning blue: #8da339;
//periwinkle: ccccff

export const Form = styled.form`
  border: 2px solid #007fff;
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
`;
export const FormTitle = styled.h3`color: silver;`;

export const TextInput = styled.input`
	width: 80%;
	height: 20px;
	color: white;
	border-radius: 20px;
	padding: 5px;
	background-color: unset;
	border: 2px solid white;
`;
export const Submit = styled.button`
	width: 100px;
	height: 30px;
	margin-top: 20px;
	border: none;
	background-color: #007fff;
	color: white;
  &:hover:enabled {
    background-color: darkblue;
  }

  &:disabled {
    background-color: gray;
    color: black;
  }

`;

export const Border = styled.form`
	background-color: unset;
	border: 1px solid white;
  margin: 0.5em 0;
  padding: 1em;
	width: 300px;
	max-width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
  box-sizing: border-box;
`;
export const Input = styled.textarea`
width: 90%;
height: 50px;
margin 10px auto;
color: white;
border: none;
border-bottom: 2px solid white;
background: unset;
&::focus {
  border: 1px solid green;
}
`;

export const Label = styled.label`
	color: white;
	text-width: bold;
`;
export const SelectWrapper = styled.span`
	display: inline-block;
	position: relative;
	margin: 20px 0;
	::after {
		content: "";
		pointer-events: none;
		display: block;
		position: absolute;
		right: 8px;
		top: calc(50% - 4px);
		width: 14px;
		height: 8px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'%3E%3Cpath id='Shape' d='M1.4175 0L0 1.34583L7 8L14 1.34583L12.5825 0L7 5.30417L1.4175 0Z' fill='white'/%3E%3C/svg%3E");
	}
`;
export const Select = styled.select`
	content: "";
	font-size: 18px;
	line-height: 1;
	background: darkslategray;
	color: #fff;
	border: 1px solid #3b3b3b;
	border-radius: 2px;
	padding: 10px 30px 10px 48px;
	width: 227px;
	height: 40px;
	text-transform: uppercase;
	-webkit-appearance: none;
	appearance: none;
`;
