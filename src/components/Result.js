import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Result = () => {
const myName = useSelector((state)=>state.userStore.user.name)
 
return(
  <div>
  <h1>{myName}</h1>
  </div>
)
}