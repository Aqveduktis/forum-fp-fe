import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userStore, login } from 'reducers/userStore';
import { Form, FormTitle, TextInput, Submit } from 'lib/shared';





export const MyForm = ({handleSubmit, info}) => {
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()

const handleForm = (event) => {
  event.preventDefault()
  handleSubmit(name,password)
}


return(
 
    <Form>
      <FormTitle>{info}</FormTitle>
      <label for="name">User Name</label>
      <TextInput
      id="name" 
      type="text" 
      value={name} 
      onChange={(e)=>setName(e.target.value)} />
      <label for="password">Password</label>
      <TextInput id="password"
      type="password" 
      value={password} 
      onChange={(e)=>setPassword(e.target.value)} />
      <Submit>{info}</Submit>
    </Form>

)
}