import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messageList: []
};

export const messageStore = createSlice({
  name: 'messageStore',
  initialState,
  reducers: {

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
         throw "could not register user"
       }
     })
     .then(json=>{
       dispatch(messageStore.actions.newMessage(json))
       console.log(json)
     })

  }
}

export const fetchMessage = () => {
  const URL = `http://localhost:8080/messages`
  return dispatch =>{
       fetch(URL)
     .then(res=>{
       if(res.ok){
         return res.json()
       }
       else{
         throw "could not register user"
       }
     })
     .then(json=>{
       dispatch(messageStore.actions.addingMessages(json))
       console.log(json)
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