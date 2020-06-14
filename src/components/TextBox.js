import React, { useState } from 'react'
import styled from 'styled-components'
import {Submit} from 'lib/shared'
import { useSelector, useDispatch } from 'react-redux'
import {postMessage} from 'reducers/messageStore'

const Border = styled.form`
background-color: unset;
border: 1px solid white;
width: 300px;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const Input = styled.textarea`
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
const Wrapper = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: flex-end;
`
const Label = styled.label`
color: white;
text-width: bold;
`


export const TextBox = ({slug}) => {
  const user = useSelector((state)=>state.userStore.user)
  const [text, setText] = useState('')
  const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(postMessage(user, text, slug));
    setText('')
	};

  return(
    <Border onSubmit={handleSubmit}>
    <Label for="textbox">Write your message</Label>
    <Input id="textbox" value={text} onChange={(e)=>setText(e.target.value)} />
    <Submit type="submit">Submit</Submit>
   
    </Border>
  )
}