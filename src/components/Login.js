import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userStore, login } from 'reducers/userStore';
import { MyForm } from './MyForm';

export const Login = () => {
	// const [name, setName] = useState("")
	// const [password, setPassword] = useState("")
	const userName = useSelector((state) => state.userStore.user.name);
	let history = useHistory();
	const dispatch = useDispatch();

	const handleLogin = (name, password) => {
		dispatch(login(name, password));
	};
	useEffect(
		() => {
			if (userName) {
				history.push('/');
			}
		},
		[ userName ]
	);

	return (
		<div>
			<MyForm info="Login" handleSubmit={handleLogin} />
		</div>
	);
};
