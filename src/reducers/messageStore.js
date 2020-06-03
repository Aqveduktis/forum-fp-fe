import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messageList: []
};

export const messageStore = createSlice({
  name: 'messageStore',
  initialState,
  reducers: {

addingMessages: (state, action) => {
      const { messages } = action.payload;
      state.messageList = messages
    },
newMessage: (state, action)=>{
  const {message} = action.payload
  const newList = state.messageList
  newList.push({message})
  state.messageList = newList

}
  }

})