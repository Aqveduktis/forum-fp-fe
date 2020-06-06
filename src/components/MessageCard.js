import React from 'react'
import { Card } from 'lib/containers'
import {Text} from 'lib/text'

export const MessageCard = ({info}) => {

  return(
    <Card>
      <Text>{info.message}</Text>
      <Text>{info.game}</Text>
      <Text>{info.createdAt}</Text>
    </Card>
  )
}