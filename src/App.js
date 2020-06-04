import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {userStore} from './reducers/userStore'
import {gameStore} from './reducers/gameStore'
import {messageStore} from './reducers/messageStore'
import { HomePage } from 'pages/HomePage';

const reducer = combineReducers({
	userStore: userStore.reducer,
  gameStore: gameStore.reducer,
  messageStore: messageStore.reducer

});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
    <HomePage />
    </Provider>
  )
}
