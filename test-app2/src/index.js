import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, NavLink } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./script/store";

// Card Game
import CardsGame from "./script/cards/components/cardsGame";

// Hangman Game
import HangmanGame from "./script/hangman/components/hangmanGame";

// Styles
import "./styles/main.scss";

/* ======= TestApp2 ReactJS ======= */

function Navbar() {
    return (
        <div className="navbar content">
            <h3>Navbar</h3>
            <div className="topbar">
                <NavLink activeClassName="active" exact to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/cards">
                    Cards
                </NavLink>
                <NavLink activeClassName="active" to="/hangman">
                    Hangman
                </NavLink>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div className="home content">
            <h1>Home</h1>
            <p>This is the home screen</p>
        </div>
    );
}

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
    document.getElementById("root")
);
