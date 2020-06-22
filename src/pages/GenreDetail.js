import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'lib/containers';
import {NotFound} from 'components/NotFound'
import { PageTitle, Text, SmallLink } from 'lib/text';
import { Image } from 'lib/images'
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
  },[slug, dispatch])
	return (
		<Page>
    {genre.name &&
    <>
			<PageTitle>{genre.name}</PageTitle>
      <div>
        <Image src={genre.backgroundImage} alt={genre.name} />
        <Text>{genre.description.replace(/<\/?p[^>]*>/g, "")}</Text>
        <Text size={1.3}>Games in this genre:</Text>
        {games && games.map((game)=>(
          <SmallLink key={game._id} to={`/games/${game.slug}`}>{game.name}</SmallLink>
        )) 
        }
      </div>
      </>
       }
       {(!genre.name && !loading) && <NotFound />}

      
		</Page>
	);
};
//replaced = yourstring.replace(/<p[^>]*>/g, "");