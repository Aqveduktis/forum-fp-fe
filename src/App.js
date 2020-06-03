import React from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {userStore} from './reducers/userStore'
import { Home } from 'components/Home';
import {Result} from './components/Result'

const reducer = combineReducers({
	userStore: userStore.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div>
      Find me in src/app.js!
      <Home />
      <Result />
    </div>
    </BrowserRouter>
    </Provider>
  )
}
