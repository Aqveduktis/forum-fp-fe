import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  statusMessage: null,
  errorMessage: null 
};

export const statusStore = createSlice({
  name: 'statusStore',
  initialState,
  reducers: {
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
	  setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
  }

})