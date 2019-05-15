import React from 'react';
import ReactDOM from 'react-dom';

// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter, Route, Link } from "react-router-dom"

import CardsGame from './components/cardsGame';

import './styles/main.scss';

/* ======= TestApp2 ReactJS ======= */

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar content">
                <h3>Navbar</h3>
                <div className="topbar">
                    <Link to='/'>Home</Link>
                    <Link to='/cards'>Cards</Link>
                </div>
            </div>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home content">
                <h1>Home</h1>
                <p>This is the home screen</p>
            </div>
        )
    }
}

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Navbar />

            <Route exact path = "/" component = {Home} />
            <Route path = "/cards" component = {CardsGame} />
        </div>
    </BrowserRouter>
), document.getElementById('app'));