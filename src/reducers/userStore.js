import { createSlice } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

const initialState = {
	user: {
		name: '',
		id: '',
		accessToken: ''
	},
	messages: [],
  games: [],
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
	    addingMessages: (state, action) => {
			state.messages = action.payload;
		},
    addingGames: (state, action) => {
			state.games = action.payload;
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
    removeMessage: (state, action) => {
  const message = action.payload
   const oldList = state.messages
  const newList = oldList.filter((item)=>(item._id !== message._id))
  state.messages = newList

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

export const addingUser = (user) => {
	const REG_URL = `http://localhost:8080/users/${user.id}`;
	return (dispatch) => {
		dispatch(userStore.actions.setLoading(true));
		dispatch(userStore.actions.setLoginMessage('trying to fetch personal information'));
		fetch(REG_URL, {
      method: 'GET',
      headers: {'Content-Type':'application/json','Authorization':`${user.accessToken}`}
      })
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw 'could not find user';
				}
			})
			.then((json) => {
				console.log(json);
        dispatch(userStore.actions.addingMessages(json.messages))
        dispatch(userStore.actions.addingGames(json.favoriteGames))
				dispatch(userStore.actions.setLoginMessage(null));
				dispatch(userStore.actions.setLoading(false));
			})
			.catch((err) => {
				dispatch(userStore.actions.setLoginMessage(err));
				dispatch(userStore.actions.setLoading(false));
			});
	};
};
export const addingSlug = (user, slug) => {
	const REG_URL = `http://localhost:8080/users/${user.id}/${slug}`;
	return (dispatch) => {
		dispatch(userStore.actions.setLoading(true));
		dispatch(userStore.actions.setLoginMessage('trying to add a game'));
		fetch(REG_URL, {
      method: 'PUT',
      headers: {'Content-Type':'application/json','Authorization':`${user.accessToken}`}
      })
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw 'could not find user';
				}
			})
			.then((json) => {
				console.log(json);
        dispatch(userStore.actions.addingGames(json.favoriteGames))
				dispatch(userStore.actions.setLoginMessage(null));
				dispatch(userStore.actions.setLoading(false));
			})
			.catch((err) => {
				dispatch(userStore.actions.setLoginMessage(err));
				dispatch(userStore.actions.setLoading(false));
			});
	};
};

export const logout = () => {
	return (dispatch) => {
		dispatch(userStore.actions.loginUser({ name: "", id: "", accessToken: "" }));
    dispatch(userStore.actions.addingMessages([]));
    dispatch(userStore.actions.addingGames([]));

	};
};

export const deleteUser = (user) => {
	const REG_URL = `http://localhost:8080/users/${user.id}`;
	return (dispatch) => {
		dispatch(userStore.actions.setLoading(true));
		dispatch(userStore.actions.setLoginMessage('trying to fetch personal information'));
		fetch(REG_URL, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json','Authorization':`${user.accessToken}`}
      })
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw 'could not find user';
				}
			})
			.then((json) => {
				console.log(json);
        dispatch(userStore.actions.loginUser({ name: "", id: "", accessToken: "" }));
        dispatch(userStore.actions.addingMessages([]))
        dispatch(userStore.actions.addingGames([]))
				dispatch(userStore.actions.setLoginMessage("removed user"));
				dispatch(userStore.actions.setLoading(false));
			})
			.catch((err) => {
				dispatch(userStore.actions.setLoginMessage(err));
				dispatch(userStore.actions.setLoading(false));
			});
	};
};