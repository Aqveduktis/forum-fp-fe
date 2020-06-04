import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameList: [],
  selectedGame: {},
  selectedGenre: {} 
};

export const gameStore = createSlice({
  name: 'gameStore',
  initialState,
  reducers: {

addingGames: (state, action) => {
      const games  = action.payload;
      state.gameList = games
    },
setGame: (state, action) => {
      const { slug, gameInfo } = action.payload;
      state.gameDetails[slug] = gameInfo;
    },
newMessage: (state, action)=>{
  const {message} = action.payload
  const newList = state.messageList
  newList.push({message})
  state.messageList = newList

}
  }

})
export const fetchGames = () => {
  const GAMES_URL = 'https://api.rawg.io/api/games?ordering=-rating0';
  return (dispatch) => {
    fetch(GAMES_URL)
      .then((res) => res.json())
      .then((json) => dispatch(gameStore.actions.addingGames(json.results)));
  };
};