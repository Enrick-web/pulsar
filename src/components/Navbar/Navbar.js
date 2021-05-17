import React from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <nav className="navbar bgLight">
                <Link to="/">
                    <h1>Pulsar.io</h1>
                </Link>
                <ul>
                <NavLink to="/Home">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/Fonctionnalite">
                    <li>Fonctionnalités</li>
                </NavLink>
                <NavLink to="/Prices">
                    <li>Formules</li>
                </NavLink>
                <Link to="/Signin">
                    <div className="btn">Connexion</div>
                </Link>
                </ul>
                <i className="fas fa-bars"></i>
            </nav>
        </>
    )
}

export default Navbar
