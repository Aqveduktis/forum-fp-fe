import { createSlice } from '@reduxjs/toolkit';
import { statusStore } from './statusStore';

const initialState = {
	gameList: [],
	selectedGame: {},
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

	}
});
export const fetchGames = () => {
	const GAMES_URL = 'http://localhost:8080/games';
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(GAMES_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw `error was ${res.status}`;
				}
			})
			.then((json) => {
				dispatch(gameStore.actions.addingGames(json));
        dispatch(statusStore.actions.setErrorMessage(null))
        dispatch(statusStore.actions.setStatusMessage(null))
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
        console.log("error", err)
				dispatch(statusStore.actions.setErrorMessage('could not fetch the games'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const fetchOneGame = (slug) => {
	const GAMES_URL = `http://localhost:8080/games/${slug}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(GAMES_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw `error was ${res.status}`;
				}
			})
			.then((json) => {
				dispatch(gameStore.actions.setGame(json));
        dispatch(statusStore.actions.setErrorMessage(null))
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
        console.log("error", err)
        dispatch(statusStore.actions.setErrorMessage('could not fetch game'))
        dispatch(statusStore.actions.setStatusMessage(null))
				dispatch(gameStore.actions.setGame({}));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};
