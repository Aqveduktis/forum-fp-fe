import React, { useState } from 'react'
import styled from 'styled-components'
import {Submit} from 'lib/shared'
import { useSelector, useDispatch } from 'react-redux'
import {postMessage} from 'reducers/messageStore'

const Border = styled.form`
background-color: #333;
width: 100%;
`
const Input = styled.input`
width: 90%;
margin 10px auto;
color: white;
background: unset;
`
const Wrapper = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: flex-end;
`


export const TextBox = ({slug}) => {
  const user = useSelector((state)=>state.userStore.user)
  const [text, setText] = useState('')
  const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(postMessage(user, text, slug));
	};

  return(
    <Border onSubmit={handleSubmit}>
    <Input id="textbox" value={text} onChange={(e)=>setText(e.target.value)} />
    <Wrapper>
    <label id="textbox">write your comment</label>
    <Submit type="submit">Submit</Submit>
    </Wrapper>
    </Border>
  )
}