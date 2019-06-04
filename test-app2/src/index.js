import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

// Home
import Home from './app/home/home';
import Navbar from './app/common/navbar';

// Card Game
import CardsGame from './app/cards/cardsGame';

// Hangman Game
import HangmanGame from './app/hangman/hangmanGame';

// Styles
import './styles/main.scss';

/* ======= TestApp2 ReactJS ======= */

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navbar />

                <Route exact path="/" component={Home} />
                <Route path="/cards" component={CardsGame} />
                <Route path="/hangman" component={HangmanGame} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
