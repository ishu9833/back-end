import React from 'react';
import './Header.css';
import logo from '../Resource/logos/Group 1329.png'
const Header = () => {
    return (
        <div className="navigation">
        <header>
            <nav className="navbar">
            <li className="logo"> <a href="/home"> <img src={logo} alt="logo"/> </a> </li>
                <ul className="menu">
                    <li className="item"> <a href="/home">Home</a> </li>
                    <li className="item"> <a href="/donation">Donation</a></li>
                    <li className="item"><a href="/events">Events</a></li>
                    <li className="item"><a href="/blog">Blog</a></li>
                    <li className="item button"><a href="/register">Register</a></li>
                    <li className="item button secondary"><a href="/admin">Admin</a></li>
                </ul>
            </nav>
            <div className="homeArea mx-auto justify-content-center col-md-6  ">
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                <form action="">
                    <input type="text" placeholder='type...' />
                    <input type="submit" value="Search" />
                </form>
            </div>

        </header>
        </div>
    );
};

export default Header;