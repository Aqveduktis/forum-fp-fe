import { createSlice } from '@reduxjs/toolkit';
import { statusStore } from 'reducers/statusStore';
import { userStore } from 'reducers/userStore';

const initialState = {
	messageList: []
};

export const messageStore = createSlice({
	name: 'messageStore',
	initialState,
	reducers: {
		addingMessages: (state, action) => {
			const messages = action.payload;
			state.messageList = messages;
		},
		newMessage: (state, action) => {
			const message = action.payload;
			const newList = state.messageList;
			newList.unshift(message);
			state.messageList = newList;
		},
		changingMessage: (state, action) => {
			const message = action.payload;
			const oldList = state.messageList;
			const newList = oldList.filter((item) => item._id !== message._id);
			newList.push(message);
			newList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			state.messageList = newList;
		},
		removeMessage: (state, action) => {
			const message = action.payload;
			const oldList = state.messageList;
			const newList = oldList.filter((item) => item._id !== message._id);
			state.messageList = newList;
		}
	}
});

export const fetchMessage = () => {
	const URL = `https://aqveduktis-final-project.herokuapp.com/messages`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
          throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(messageStore.actions.addingMessages(json));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log(err);
				dispatch(statusStore.actions.setErrorMessage('could not fetch messages'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};
export const postMessage = (user, message, game) => {
	const URL = `https://aqveduktis-final-project.herokuapp.com/messages`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(URL, {
			method: 'POST',
			body: JSON.stringify({ message, game }),
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
				dispatch(messageStore.actions.newMessage(json));
				dispatch(userStore.actions.addingOneMessage(json));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not post message'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const likeMessage = (message) => {
	const URL = `https://aqveduktis-final-project.herokuapp.com/messages/${message._id}/like`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(URL, {
			method: 'POST',
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
				dispatch(messageStore.actions.changingMessage(json));
				dispatch(statusStore.actions.setStatusMessage('liked a message'));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not like that message'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const deleteMessage = (message, user) => {
	const URL = `https://aqveduktis-final-project.herokuapp.com/messages/${message._id}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(URL, {
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
				dispatch(statusStore.actions.setStatusMessage('removed the message'));
				dispatch(messageStore.actions.removeMessage(message));
				dispatch(userStore.actions.removeMessage(message));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not remove message'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};
