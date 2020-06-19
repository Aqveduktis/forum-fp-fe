import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Page, Banner, Gallery, PictureBox } from 'lib/containers';
import {NotFound} from 'components/NotFound'
import { PageTitle, Text, SmallLink } from 'lib/text';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneGenre } from 'reducers/gameStore';

export const GenreDetail = () => {
	const { slug } = useParams();
  const dispatch = useDispatch()
  const genre = useSelector((state)=>state.gameStore.selectedGenre)
  const loading = useSelector((state)=>state.statusStore.isLoading)
  const games = useSelector((state)=> state.gameStore.gameList.filter((game) => {
			return game.genres.find((item) => item.slug === slug);
		}) )
  useEffect(()=>{
    dispatch(fetchOneGenre(slug))
  },[slug])
	return (
		<Page>
			<PageTitle>{slug}</PageTitle>
      {genre.name &&
      <div>
        <img src={genre.backgroundImage} style={{width: 300}} />
        <Text>{genre.description.replace(/<\/?p[^>]*>/g, "")}</Text>
        <Text size={1.3}>Games in this genre:</Text>
        {games && games.map((game)=>(
          <SmallLink to={`/games/${game.slug}`}>{game.name}</SmallLink>
        ) 
        )}
      </div>
       }
       {(!genre && !loading) && <NotFound />}

      
		</Page>
	);
};
//replaced = yourstring.replace(/<p[^>]*>/g, "");