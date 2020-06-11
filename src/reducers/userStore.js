import { createSlice } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

const initialState = {
	user: {
		name: '',
		id: '',
		accessToken: ''
	},
	messages: [],
	loginMessage: null,
	registerMessage: null,
	isLoading: false
};

export const userStore = createSlice({
	name: 'userStore',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const { name, id, accessToken } = action.payload;
			state.user = { name, id, accessToken };
		},
		setLoginMessage: (state, action) => {
			state.loginMessage = action.payload;
		},
		setRegisterMessage: (state, action) => {
			state.registerMessage = action.payload;
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		}
	}
});

export const login = (name, password) => {
	const LOGIN_URL = 'http://localhost:8080/sessions';
	return (dispatch) => {
		dispatch(userStore.actions.setLoading(true));
		dispatch(userStore.actions.setLoginMessage('trying to login'));
		fetch(LOGIN_URL, {
			method: 'POST',
			body: JSON.stringify({ name, password }),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => {
				console.log(res.status);
				if (res.ok) {
					return res.json();
				} else {
					throw `could not login, error:${res.status}`;
				}
			})
			.then((json) => {
				console.log(json);
				dispatch(userStore.actions.loginUser({ name: name, id: json.userId, accessToken: json.accessToken }));
				dispatch(userStore.actions.setLoginMessage(null));
				dispatch(userStore.actions.setRegisterMessage(null));
				dispatch(userStore.actions.setLoading(false));
			})
			.catch((err) => {
				dispatch(userStore.actions.setLoginMessage(err));
				dispatch(userStore.actions.setLoading(false));
			});
	};
};
export const register = (name, password) => {
	const REG_URL = 'http://localhost:8080/users';
	return (dispatch) => {
		dispatch(userStore.actions.setLoading(true));
		dispatch(userStore.actions.setRegisterMessage('trying to register'));
		fetch(REG_URL, {
			method: 'POST',
			body: JSON.stringify({ name, password }),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => {
				console.log(res.ok);
				if (res.ok) {
					return res.json();
				} else {
					throw 'could not register user';
				}
			})
			.then((json) => {
				console.log(json);
				dispatch(userStore.actions.setRegisterMessage(`created user, ${json.name}`));
				dispatch(userStore.actions.setLoading(false));
			})
			.catch((err) => {
				dispatch(userStore.actions.setRegisterMessage(err));
				dispatch(userStore.actions.setLoading(false));
			});
	};
};
