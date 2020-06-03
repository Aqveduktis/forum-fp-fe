import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userStore, login } from 'reducers/userStore';

export const MyForm = ({handleSubmit, info}) => {
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()

const handleForm = (event) => {
  event.preventDefault()
  handleSubmit(name,password)
}


return(
  <form onSubmit={handleForm}>
  <h1> {info} </h1>
    <label>
    user name:
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </label>
    <label>
    password:
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </label>
    <button type="submit">{info}</button>
  </form>
)
}