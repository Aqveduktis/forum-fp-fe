import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userStore, login, register } from 'reducers/userStore';
import { MyForm } from './MyForm';
import { Page } from 'lib/containers';
import { PageTitle, Text } from 'lib/text';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from 'lib/shared';


export const Login = () => {

  	const [ checked, setChecked ] = useState(false);
	const userName = useSelector((state) => state.userStore.user.name);
	let history = useHistory();
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
