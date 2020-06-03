import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user:{
    name:"",
    accessToken:"",
    
  },
  messages:[]
};

export const userStore = createSlice({
	name: 'userStore',
	initialState,
	reducers: {

loginUser: (state, action) => {
			const { name, accessToken } = action.payload;
      state.user = {name, accessToken}
		},

  }

})