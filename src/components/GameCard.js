import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const CardLink = styled(Link)`
width: 30%;
min-width: 300px;
`

const Article = styled.article`
width: 100%;
background-color: gray;
color: white;

img {
width: 100%;

}
`


export const GameCard = ({info}) => {

  return (
        <CardLink to={`/games/${info.id}`}>
          <Article>
            <img src={info.background_image} />
            <h2>{info.name}</h2>
            </Article>
          </CardLink>
  )
}