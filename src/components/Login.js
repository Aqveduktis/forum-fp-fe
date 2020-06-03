import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userStore, login } from 'reducers/userStore';
import {MyForm} from './MyForm'

export const Login = () => {
// const [name, setName] = useState("")
// const [password, setPassword] = useState("")

const dispatch = useDispatch()

const handleLogin = (name, password) => {
  dispatch(login(name, password))
}


return(
  <div>
<MyForm info="Login" handleSubmit={handleLogin} />

</div>
)
}