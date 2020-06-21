import { createSlice } from '@reduxjs/toolkit';
import { statusStore } from 'reducers/statusStore';

const initialState = {
	user: {
		name: '',
		id: '',
		accessToken: ''
	},
	messages: [],
	games: []
};

export const userStore = createSlice({
	name: 'userStore',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const { name, id, accessToken } = action.payload;
			state.user = { name, id, accessToken };
		},
		addingMessages: (state, action) => {
			state.messages = action.payload;
		},
		addingOneMessage: (state, action) => {
			const myList = state.messages;
			myList.push(action.payload);
			state.messages = myList;
		},

		addingGames: (state, action) => {
			state.games = action.payload;
		},

		removeMessage: (state, action) => {
			const message = action.payload;
			const oldList = state.messages;
			const newList = oldList.filter((item) => item._id !== message._id);
			state.messages = newList;
		}
	}
});

export const login = (name, password) => {
	const LOGIN_URL = 'https://aqveduktis-final-project.herokuapp.com/sessions';
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(LOGIN_URL, {
			method: 'POST',
			body: JSON.stringify({ name, password }),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
							throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(userStore.actions.loginUser({ name: name, id: json.userId, accessToken: json.accessToken }));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('there was an error login in'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};
export const register = (name, password) => {
	const REG_URL = 'https://aqveduktis-final-project.herokuapp.com/users';
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(REG_URL, {
			method: 'POST',
			body: JSON.stringify({ name, password }),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
						throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(statusStore.actions.setStatusMessage(`created user, ${json.name}`));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage(`there was an error registrating new user ${name}`));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const addingUser = (user) => {
	const REG_URL = `https://aqveduktis-final-project.herokuapp.com/users/${user.id}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(REG_URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json', Authorization: `${user.accessToken}` }
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(userStore.actions.addingMessages(json.messages));
				dispatch(userStore.actions.addingGames(json.favoriteGames));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log(err);
				dispatch(statusStore.actions.setErrorMessage('There was an error fetching data'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};


export const logout = () => {
	return (dispatch) => {
		dispatch(userStore.actions.loginUser({ name: '', id: '', accessToken: '' }));
		dispatch(userStore.actions.addingMessages([]));
		dispatch(userStore.actions.addingGames([]));
		dispatch(statusStore.actions.setStatusMessage('user logged out'));
	};
};

export const deleteUser = (user) => {
	const REG_URL = `https://aqveduktis-final-project.herokuapp.com/users/${user.id}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(REG_URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json', Authorization: `${user.accessToken}` }
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
						throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(userStore.actions.loginUser({ name: '', id: '', accessToken: '' }));
				dispatch(userStore.actions.addingMessages([]));
				dispatch(userStore.actions.addingGames([]));
				dispatch(statusStore.actions.setStatusMessage(`removed user ${user.name}`));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not remove user'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};
