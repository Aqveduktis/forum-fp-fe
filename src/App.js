import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { userStore } from './reducers/userStore';
import { gameStore } from './reducers/gameStore';
import { messageStore } from './reducers/messageStore';
import { HomePage } from 'pages/HomePage';

const reducer = combineReducers({
	userStore: userStore.reducer,
	gameStore: gameStore.reducer,
	messageStore: messageStore.reducer
});
const store = configureStore({ reducer });

// Retrieve the existing state from localstorage if it exists
// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
// const enhancer = compose(persistState());
// const store = createStore(
// 	reducer,
// 	persistedState,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// store.subscribe(() => {
// 	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });
// console.log(localStorage);

export const App = () => {
	return (
		<Provider store={store}>
			<HomePage />
		</Provider>
	);
};
