import { createSlice } from '@reduxjs/toolkit';
import { statusStore } from './statusStore';
import {userStore} from './userStore'

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
    setGenre: (state, action) => {
			state.selectedGenre = action.payload;
		}
	}
});
export const fetchGames = () => {
	const GAMES_URL = 'https://aqveduktis-final-project.herokuapp.com/games';
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(GAMES_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(`code is ${res.status}`);
					
				}
			})
			.then((json) => {
				dispatch(gameStore.actions.addingGames(json));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not fetch the games'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const fetchOneGame = (slug) => {
	const GAMES_URL = `https://aqveduktis-final-project.herokuapp.com/games/${slug}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(GAMES_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
						throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(gameStore.actions.setGame(json));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not fetch game'));
				dispatch(gameStore.actions.setGame({}));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const favoritingGames = (user, slug) => {
	const REG_URL = `https://aqveduktis-final-project.herokuapp.com/users/${user.id}/${slug}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(REG_URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', Authorization: `${user.accessToken}` }
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
						throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(userStore.actions.addingGames(json.favoriteGames));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('there was an error favoriting the game'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const fetchOneGenre = (slug) => {
	const GAMES_URL = `https://aqveduktis-final-project.herokuapp.com/genres/${slug}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(GAMES_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
						throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(gameStore.actions.setGenre(json));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not fetch genre'));
				dispatch(gameStore.actions.setGenre({}));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};