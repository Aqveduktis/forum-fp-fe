import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Result } from '../components/Result'
import { Page } from 'lib/containers'
import {PageTitle, Text} from 'lib/text'
import {CheckBoxWrapper, CheckBox, CheckBoxLabel} from 'lib/shared'

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`

export const UserPage = () => {
const dispatch = useDispatch()
const [checked, setChecked] = useState(false)

  return(
    <Page>
    <PageTitle>Users</PageTitle>
   <Text>flip the switch to login/register</Text>
    <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    <Wrapper>
    {checked ? <Register /> : <Login /> }
    </Wrapper>
    <Result />
    </Page>

  )
}