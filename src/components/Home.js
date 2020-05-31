import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userStore } from 'reducers/userStore';

export const Home = () => {

const dispatch = useDispatch()
const name = "Emil"

  const myName = (e) => {
    dispatch(
      userStore.actions.changeName({
        name
      })
    );
    
  };
  myName()
return(
  <div>
  </div>
)
}