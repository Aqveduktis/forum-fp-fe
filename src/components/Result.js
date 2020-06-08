import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'lib/text';

export const Result = () => {
const myName = useSelector((state)=>state.userStore.user.name)
 
return(
  <div>
  {myName && <Text>current user {myName}</Text>}
  </div>
)
}