import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Page, Banner, Gallery, PictureBox } from 'lib/containers';
import {NotFound} from 'components/NotFound'
import { PageTitle, Text } from 'lib/text';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneGenre } from 'reducers/gameStore';

export const GenreDetail = () => {
	const { slug } = useParams();
  const dispatch = useDispatch()
  const genre = useSelector((state)=>state.gameStore.selectedGenre)
  const loading = useSelector((state)=>state.statusStore.isLoading)
  useEffect(()=>{
    dispatch(fetchOneGenre(slug))
  },[slug])
	return (
		<Page>
			<PageTitle>{slug}</PageTitle>
      {genre.name &&
      <div>
        <img src={genre.backgroundImage} style={{width: 300}} />
        <Text>{genre.description}</Text>
      </div>
       }
       {(!genre && !loading) && <NotFound />}

      
		</Page>
	);
};
