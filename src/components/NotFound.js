import React from 'react'
import { useSelector } from 'react-redux'
import { GameCard } from './GameCard'
import { Image } from 'lib/shared'
import {Text, NormalLink} from 'lib/text'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return(
<div>
<Image src={require('../lib/404notfound.png')} />
<Text>There seems to be an error please return to homepage or try again in a few minutes</Text>
<NormalLink to='/'>Home Page</NormalLink>
</div>


  )
}