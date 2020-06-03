import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userStore, register } from 'reducers/userStore';
import {MyForm} from './MyForm'

export const Register = () => {
// const [name, setName] = useState("")
// const [password, setPassword] = useState("")
const message = useSelector(store=>store.userStore.statusMessage)
const dispatch = useDispatch()

const handleLogin = (name, password) => {
  dispatch(register(name, password))
}


return(
  <div>
<MyForm info="Register" handleSubmit={handleLogin} />
<p>{message}</p>
</div>
)
}