import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userStore, login } from 'reducers/userStore';

export const Login = () => {
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch()

const handleLogin = (event) => {
  event.preventDefault()
  dispatch(login(name, password))
}

return(
  <form onSubmit={handleLogin}>
  <h1>Login</h1>
    <label>
    user name:
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </label>
    <label>
    password:
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </label>
    <button type="submit">Login</button>
  </form>
)
}