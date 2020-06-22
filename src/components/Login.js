import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from 'reducers/userStore';
import { MyForm } from './MyForm';
import { Text } from 'lib/text';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from 'lib/buttons';


export const Login = () => {
  const [ checked, setChecked ] = useState(false);
	const dispatch = useDispatch();

	const handleLogin = (name, password) => {
		dispatch(login(name, password));
	};
  const handleRegister = (name, password) => {
  dispatch(register(name, password))
}


	return (
		<div>
      <Text>flip the switch to login/register</Text>
			<CheckBoxWrapper>
				<CheckBox
					id="checkbox"
					type="checkbox"
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
				/>
				<CheckBoxLabel htmlFor="checkbox" />
			</CheckBoxWrapper>
      <div>{checked ? <MyForm info="Register" handleSubmit={handleRegister} /> : <MyForm info="Login" handleSubmit={handleLogin} />}</div>
		</div>
	);
};
