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

},
changingMessage: (state, action)=>{
  const message = action.payload
  const oldList = state.messageList
  const newList = oldList.filter((item)=>(item._id !== message._id))
  newList.push(message)
  state.messageList = newList

},
removeMessage: (state, action) => {
  const message = action.payload
   const oldList = state.messageList
  const newList = oldList.filter((item)=>(item._id !== message._id))
  state.messageList = newList

}
  }

})


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
       console.log(err)
       dispatch(messageStore.actions.setMessageStatus("a error"))
       dispatch(userStore.actions.setLoading(false));
     })

  }
}
export const postMessage = (user, message, game) => {
  const URL = `http://localhost:8080/messages`
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
       dispatch(messageStore.actions.setMessageStatus(null))
       dispatch(messageStore.actions.newMessage(json))
       dispatch(userStore.actions.addingOneMessage(json));
       dispatch(userStore.actions.setLoading(false));
       
     })
     .catch((err) => {
       dispatch(messageStore.actions.setMessageStatus(err))
        dispatch(userStore.actions.setLoading(false));
     })

  }
}

export const likeMessage = ( message) => {
  const URL = `http://localhost:8080/messages/${message._id}/like`
  return dispatch =>{
    dispatch(userStore.actions.setLoading(true));
    dispatch(messageStore.actions.setMessageStatus("trying to like a message"))
       fetch(URL, {
       method: 'PUT',
       headers: {'Content-Type':'application/json' }
     })
     .then(res=>{
       if(res.ok){
         return res.json()
       }
       else{
         throw "could not like message"
       }
     })
     .then(json=>{
       dispatch(messageStore.actions.setMessageStatus("liked the message"))
       dispatch(messageStore.actions.changingMessage(json))
       dispatch(userStore.actions.setLoading(false));
       
     })
     .catch((err) => {
       dispatch(messageStore.actions.setMessageStatus(err))
        dispatch(userStore.actions.setLoading(false));
     })

  }
}

export const deleteMessage = (message, user) => {
  const URL = `http://localhost:8080/messages/${message._id}`
  return dispatch => {
    dispatch(userStore.actions.setLoading(true));
    dispatch(messageStore.actions.setMessageStatus("trying to remove a message"))
    fetch(URL, {
       method: 'DELETE',
       headers: {'Content-Type':'application/json','Authorization':`${user.accessToken}` }
     })
     .then(res=>{
       if(res.ok){
         return res.json()
       }
       else{
         throw "could not remove message"
       }
     })
     .then(json=>{
       console.log("removing", json)
       dispatch(messageStore.actions.setMessageStatus("removed the message"))
       dispatch(messageStore.actions.removeMessage(message))
       dispatch(userStore.actions.removeMessage(message))
       dispatch(userStore.actions.setLoading(false));
       
     })
     .catch((err) => {
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