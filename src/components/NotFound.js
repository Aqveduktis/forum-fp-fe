import React from 'react'
import { useSelector } from 'react-redux'
import { GameCard } from './GameCard'
import { Wrapper } from 'lib/containers'
import {Text, NormalLink} from 'lib/text'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return(
<div>
<img src={require('../lib/404notfound.png')} />
<Text>There seems to be an error please return to homepage or try again in a few minutes</Text>
<NormalLink to='/'>Home Page</NormalLink>
</div>


  )
}