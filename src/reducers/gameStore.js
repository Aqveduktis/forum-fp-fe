import { createSlice } from '@reduxjs/toolkit';
import { userStore } from './userStore';

const initialState = {
	gameList: [],
	selectedGame: {},
	selectedGenre: {},
  fetchingStatus: null,
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
    setFetchingStatus: (state, action) => {
      state.fetchingStatus = action.payload
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
    dispatch(gameStore.actions.setFetchingStatus("fetching all games"))
		fetch(GAMES_URL)
    .then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw 'could not fetch games';
				}
			})
			.then((json) => {
				console.log(json);
        dispatch(gameStore.actions.setFetchingStatus(null))
        dispatch(gameStore.actions.addingGames(json))
        dispatch(userStore.actions.setLoading(false));
			})
			.catch((err) => {
				dispatch(gameStore.actions.setFetchingStatus("could not fetch the games"))
        dispatch(userStore.actions.setLoading(false));
			});

	};
};

export const fetchOneGame = (slug) => {
	const GAMES_URL = `http://localhost:8080/games/${slug}`;
	return (dispatch) => {
    dispatch(userStore.actions.setLoading(true));
    dispatch(gameStore.actions.setFetchingStatus(`fetching game ${slug}`))
		fetch(GAMES_URL)
    .then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw 'could not fetch games';
				}
			})
			.then((json) => {
				console.log(json);
        dispatch(gameStore.actions.setFetchingStatus(null))
       dispatch(gameStore.actions.setGame(json));
        dispatch(userStore.actions.setLoading(false));
			})
			.catch((err) => {
				dispatch(gameStore.actions.setFetchingStatus("could not fetch game"))
       dispatch(gameStore.actions.setGame({}));
        dispatch(userStore.actions.setLoading(false));
			});

	};
};
