import React, { useState } from 'react';
import { Form, FormTitle, TextInput, Submit } from 'lib/form';

export const MyForm = ({ handleSubmit, info }) => {
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('');
	
	const handleForm = (event) => {
		event.preventDefault();
		handleSubmit(name, password);
		setPassword('');
		setName('');
	};

	return (
		<Form onSubmit={handleForm}>
			<FormTitle>{info}</FormTitle>
			<label>User Name</label>
			<TextInput
				type="text"
				pattern="[a-zA-Z0-9]+"
				placeholder="monty"
				minlength="2"
				required
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label>Password</label>
			<TextInput
				type="password"
				minlength="4"
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Submit disabled={!name || !password} type="submit">{info}</Submit>
		</Form>
	);
};
