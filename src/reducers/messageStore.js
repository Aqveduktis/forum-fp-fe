import { createSlice } from '@reduxjs/toolkit';
import { userStore } from './userStore';

const initialState = {
  messageList: [],
  messageStatus: null 
};

export const messageStore = createSlice({
  name: 'messageStore',
  initialState,
  reducers: {
setMessageStatus: (state, action) => {
  state.messageStatus = action.payload
},
addingMessages: (state, action) => {
      const  messages  = action.payload;
      state.messageList = messages
    },
newMessage: (state, action)=>{
  const message = action.payload
  const newList = state.messageList
  newList.push(message)
  state.messageList = newList

}
  }

})
export const postMessage = (user, message, game) => {
  const URL = `http://localhost:8080/users/${user.id}/messages`
  return dispatch =>{
    dispatch(userStore.actions.setLoading(true));
    dispatch(messageStore.actions.setMessageStatus("trying to post a message"))
       fetch(URL, {
       method: 'POST',
       body: JSON.stringify({message, game}),
       headers: {'Content-Type':'application/json','Authorization':`${user.accessToken}` }
     })
     .then(res=>{
       if(res.ok){
         return res.json()
       }
       else{
         throw "could not post message"
       }
     })
     .then(json=>{
       
    dispatch(messageStore.actions.setMessageStatus("posted the message"))
       dispatch(messageStore.actions.newMessage(json))
       dispatch(userStore.actions.setLoading(false));
       console.log(json)
     })
     .catch((err) => {
       dispatch(messageStore.actions.setMessageStatus(err))
        dispatch(userStore.actions.setLoading(false));
     })

  }
}

export const fetchMessage = () => {
  const URL = `http://localhost:8080/messages`
  return dispatch =>{
    dispatch(userStore.actions.setLoading(true))
    dispatch(messageStore.actions.setMessageStatus("trying to fetch all messages"))
       fetch(URL)
     .then(res=>{
       if(res.ok){
         return res.json()
       }
       else{
         throw "could not fetch messages"
       }
     })
     .then(json=>{
       dispatch(messageStore.actions.addingMessages(json))
       dispatch(messageStore.actions.setMessageStatus(null))
       dispatch(userStore.actions.setLoading(false));
       console.log(json)
     })
     .catch((err)=>{
       dispatch(messageStore.actions.setMessageStatus(err))
       dispatch(userStore.actions.setLoading(false));
     })

  }
}
//'/users/:id/messages

// export const register = (name, password) =>{
//   const REG_URL = 'http://localhost:8080/users'
//   return(dispatch)=>{
//     fetch(REG_URL, {
//       method: 'POST',
//       body: JSON.stringify({name, password}),
//       headers: {'Content-Type':'application/json'}
//     }).then(res=>{
//       console.log(res.ok)
//       if(res.ok){
//         return res.json()
//       }
//       else{
//         throw "could not register user"
//       }
//     })
//     .then(json => {
//       console.log(json)
//       dispatch(userStore.actions.setStatusMessage(`created user, ${json.name}`))
//     }

//     )
//     .catch((err)=>{
//       dispatch(userStore.actions.setStatusMessage(err))
//     }

//     )
//   }
// }