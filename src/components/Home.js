import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userStore } from 'reducers/userStore';
import { Login } from './Login';
import { Register } from './Register';

export const Home = () => {

// const dispatch = useDispatch()
// const name = "Emil"

//   const myName = (e) => {
//     dispatch(
//       userStore.actions.loginUser({
//         name
//       })
//     );
    
//   };
//   myName()
return(
  <div>
  <Login />
  <Register />
  </div>
)
}