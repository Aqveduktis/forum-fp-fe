import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Result = () => {
const [name, setName] = useState("Emil")
const dispatch = useDispatch()
const myName = useSelector((state)=>state.userStore.user)
 
return(
  <div>
  <h1>{myName}</h1>
  </div>
)
}