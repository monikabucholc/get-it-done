import React from 'react';
import Inputbox from './Inputbox';
import './Navigation.css';

const Navigation = ({ showMenu, setShowMenu }) => {
    const showMenuHandler = () => {
        setShowMenu(!showMenu);
    }
    return (
    <nav className="navbar">
        <div className="logo">
            <img src={require("../images/Getitdone.png")} width="184" height="24" alt="Get It Done!"/>
        </div>
        <Inputbox className="inputbox"/>
        <button className="showMenu" onClick={showMenuHandler}><i className="fa-solid fa-bars" /></button>
        <p className="logout">Log Out</p>
    </nav>
    )
}

export default Navigation;