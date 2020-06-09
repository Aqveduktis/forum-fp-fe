import { createSlice } from '@reduxjs/toolkit';
import { userStore } from './userStore';

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
			const games = action.payload;
			state.gameList = games;
		},
		setGame: (state, action) => {
			const gameInfo = action.payload;
			state.selectedGame = gameInfo;
		},
		newMessage: (state, action) => {
			const { message } = action.payload;
			const newList = state.messageList;
			newList.push({ message });
			state.messageList = newList;
		}
	}
});
export const fetchGames = () => {
	const GAMES_URL = 'http://localhost:8080/games';
	return (dispatch) => {
		dispatch(userStore.actions.setLoading(true));
		fetch(GAMES_URL).then((res) => res.json()).then((json) => {
			dispatch(gameStore.actions.addingGames(json));
			dispatch(userStore.actions.setLoading(false));
		});
	};
};

export const fetchOneGame = (slug) => {
	const GAMES_URL = `http://localhost:8080/games/${slug}`;
	return (dispatch) => {
		fetch(GAMES_URL).then((res) => res.json()).then((json) => {
			dispatch(gameStore.actions.setGame(json));
		});
	};
};
