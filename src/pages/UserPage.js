import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Result } from '../components/Result'
import { Page } from 'lib/shared'
import {PageTitle} from 'lib/text'

export const UserPage = () => {
const dispatch = useDispatch()

  return(
    <Page>
    <PageTitle>Users</PageTitle>
       <Login />
    <Register />
    <Result />
    </Page>

  )
}