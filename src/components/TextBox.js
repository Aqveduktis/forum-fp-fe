import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {Border, Label, Input, Submit} from 'lib/form'
import {Text, NormalLink} from 'lib/text'
import {postMessage} from 'reducers/messageStore'


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
    <div>
    {user.name && 
    <Border onSubmit={handleSubmit}>
    <Label for="textbox">Write your message</Label>
    <Input id="textbox" value={text} onChange={(e)=>setText(e.target.value)} />
    <Submit type="submit">Submit</Submit>
   
    </Border>
    }
    {!user.name &&
    <div>
    <Text>Please login to write messages</Text>
    <NormalLink to='/user'>Login Page</NormalLink>
    </div>
     }
    
    </div>


  )
}