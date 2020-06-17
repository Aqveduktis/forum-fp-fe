import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userStore } from './reducers/userStore';
import { gameStore } from './reducers/gameStore';
import { messageStore } from './reducers/messageStore';
import { HomePage } from 'pages/HomePage';
import { statusStore } from 'reducers/statusStore';

const reducer = combineReducers({
	userStore: userStore.reducer,
	gameStore: gameStore.reducer,
	messageStore: messageStore.reducer,
  statusStore: statusStore.reducer
});
//const store = configureStore({ reducer });

//from louise
const saveToLocalStorage = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('forum-reduxState', serializedState);
	} catch (e) {
		console.log(e);
	}
};

const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('forum-reduxState');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

// const reducer = combineReducers({
//   ui: ui.reducer,
//   cart: cart.reducer,
//   products: products.reducer
// })
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export const App = () => {
	return (
		<Provider store={store}>
			<HomePage />
		</Provider>
	);
};
