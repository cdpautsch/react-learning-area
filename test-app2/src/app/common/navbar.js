import React from 'react';
import { NavLink } from 'react-router-dom';

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
export default Navbar;
