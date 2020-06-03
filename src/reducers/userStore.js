import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user:{
    name:"",
    id:"",
    accessToken:"",
    
  },
  messages:[],
  statusMessage:null
};

export const userStore = createSlice({
	name: 'userStore',
	initialState,
	reducers: {



loginUser: (state, action) => {
			const { name, id, accessToken } = action.payload;
      state.user = {name, id, accessToken}
		},
setStatusMessage: (state, action) =>{
  state.statusMessage = action.payload
}

  }

})

export const login = (name, password) =>{
  const LOGIN_URL = 'http://localhost:8080/sessions'
  return(dispatch)=>{
    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({name, password}),
      headers: {'Content-Type':'application/json'}
    }).then(res=>{
      console.log(res.ok)
      if(res.ok){
        return res.json()
      }
      else{
        throw "could not login"
      }
    })
    .then(json => {
      console.log(json)
      dispatch(userStore.actions.loginUser({name:name, id:json.userId, accessToken:json.accessToken}))
    }

    )
    .catch((err)=>{
      dispatch(userStore.actions.setStatusMessage(err))
    }

    )
  }
}
export const register = (name, password) =>{
  const REG_URL = 'http://localhost:8080/users'
  return(dispatch)=>{
    fetch(REG_URL, {
      method: 'POST',
      body: JSON.stringify({name, password}),
      headers: {'Content-Type':'application/json'}
    }).then(res=>{
      console.log(res.ok)
      if(res.ok){
        return res.json()
      }
      else{
        throw "could not register user"
      }
    })
    .then(json => {
      console.log(json)
      dispatch(userStore.actions.setStatusMessage(`created user, ${json.name}`))
    }

    )
    .catch((err)=>{
      dispatch(userStore.actions.setStatusMessage(err))
    }

    )
  }
}