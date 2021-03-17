import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import PokedoxService from './services/pokedox-service';
import PokedoxServiceContext from './components/pokedox-service-context';
import store from './store';

import './index.scss';

const pokedoxService = new PokedoxService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <PokedoxServiceContext.Provider value={pokedoxService}>
                <Router>
                    <App/>
                </Router>
            </PokedoxServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

