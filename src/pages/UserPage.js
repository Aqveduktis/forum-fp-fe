import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Result } from '../components/Result'

export const UserPage = () => {
const dispatch = useDispatch()
const games = useSelector((store)=>store.gameStore.gameList)
  return(
    <div>
    <Login />
    <Register />
    <Result />
    </div>
  )
}