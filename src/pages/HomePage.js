import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GameDetails } from './GameDetails';
import { GameList } from './GameList';
import { UserPage } from './UserPage';
import { Header } from 'components/Header';
import { Home } from 'components/Home';

export const HomePage = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/user" exact>
						<UserPage />
					</Route>
					<Route path="/games" exact>
						<GameList />
					</Route>
					<Route path="/games/:id">
						<GameDetails />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};
