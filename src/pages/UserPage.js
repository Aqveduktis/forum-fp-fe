import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Result } from '../components/Result'
import { Page } from 'lib/containers'
import {PageTitle} from 'lib/text'

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`

export const UserPage = () => {
const dispatch = useDispatch()

  return(
    <Page>
    <PageTitle>Users</PageTitle>
    <Wrapper>
    <Login />
    <Register />
    </Wrapper>
    <Result />
    </Page>

  )
}