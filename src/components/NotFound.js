import React from 'react'
import { Image } from 'lib/images'
import {Text, NormalLink} from 'lib/text'


export const NotFound = () => {
  return(
<div>
<Image src={require('../lib/404notfound.png')} alt="404 not found" />
<Text>There seems to be an error please return to homepage or try again in a few minutes</Text>
<NormalLink to='/'>Home Page</NormalLink>
</div>

  )}