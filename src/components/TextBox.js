import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Border, Label, Input, Submit} from 'lib/form'
import {Container} from 'lib/containers'
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
    <>
    {user.name && 
    <Border onSubmit={handleSubmit}>
    <Label htmlFor="textbox">Write your message</Label>
    <Input id="textbox" value={text} onChange={(e)=>setText(e.target.value)} required />
    <Submit disabled={!text} type="submit">Submit</Submit>
   
    </Border>
    }
    {!user.name &&
    <Container>
      <Text>Please login to write messages</Text>
      <NormalLink to='/user'>Login Page</NormalLink>
    </Container>
     }
    
    </>


  )
}