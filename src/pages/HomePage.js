import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {GameDetails} from './GameDetails'
import {GameList} from './GameList'
import { UserPage } from './UserPage';



export const HomePage = () => {
  return (
   
    <div>
    <BrowserRouter>
    <Switch>
       <Route path="/" exact>
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

  )
}