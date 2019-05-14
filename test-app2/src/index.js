import React from 'react';
import ReactDOM from 'react-dom';

// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter, Route, Link } from "react-router-dom"

import Cards from './components/cardsGame';

import './styles/main.scss';

/* ======= TestApp2 ReactJS ======= */

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <h3>NAVBAR</h3>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/cards'>Cards</Link>
                    </li>
                </ul>
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
            <div className="home">
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
            <Route path = "/cards" component = {Cards} />
        </div>
    </BrowserRouter>
), document.getElementById('app'));