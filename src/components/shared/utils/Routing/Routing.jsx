import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterPage from '../../../pages/CharacterPage/CharacterPage';
import CharacterDetaills from '../../../pages/CharacterPage/CharacterDetaills/CharacterDetaills';
import HomePage from '../../../pages/HomePage/HomePage'
import HouseDetaills from '../../../pages/HousePage/HouseDetaills/HouseDetaills';
import HousePage from '../../../pages/HousePage/HousePage';
import ChronoPage from '../../../pages/ChronoPage/ChronoPage';


export default function Routing() {
    return (

        <Router>


            <Switch>

                <Route path="/CharacterPage">
                    <CharacterPage />
                </Route>
                <Route path="/CharacterDetaills/:character">
                    <CharacterDetaills />
                </Route>
                <Route path="/HouseDetaills/:name">
                    <HouseDetaills />
                </Route>
                <Route path="/HousePage">
                    <HousePage />
                </Route>
                <Route path="/ChronoPage">
                    <ChronoPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>




            </Switch>

        </Router>


    )
}
