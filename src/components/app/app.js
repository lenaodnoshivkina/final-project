import React from 'react';
import {MainPage, CaughtPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import Background from './bg.jpg';
import {Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/caught' component={CaughtPage}/>
                    <Route path='/card/:id' component={ItemPage}/>
                    <Redirect to="/"/>
                </Switch>
        </div>
    )
}

export default App;