import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Border, FormTitle, TextInput, Submit } from 'lib/form';

export const MyForm = ({ handleSubmit, info }) => {
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('');
	const dispatch = useDispatch();

	const handleForm = (event) => {
		event.preventDefault();
		handleSubmit(name, password);
    setPassword("")
    setName("")
	};

	return (
		<Form onSubmit={handleForm}>
			<FormTitle>{info}</FormTitle>
			<label>User Name</label>
			<TextInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<label>Password</label>
			<TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<Submit type="submit">{info}</Submit>
		</Form>
	);
};
