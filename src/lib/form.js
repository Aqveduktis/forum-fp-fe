import styled from 'styled-components'

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
  color: white;
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

export const Border = styled.form`
background-color: unset;
border: 1px solid white;
width: 300px;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
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
`

export const Label = styled.label`
color: white;
text-width: bold;
`