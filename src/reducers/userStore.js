import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user:""
};

export const userStore = createSlice({
	name: 'userStore',
	initialState,
	reducers: {

changeName: (state, action) => {
			const { name } = action.payload;
      state.user = name
		},

  }

})