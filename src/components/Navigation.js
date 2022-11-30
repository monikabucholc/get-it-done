import React from 'react';
import Inputbox from './Inputbox';
import './Navigation.css';



const Navigation = () => {
    return (
    <nav className="navbar">
       <img src={require("../images/Getitdone.png")} width="184" height="24" alt="Get It Done!" className="logo"/>
        <Inputbox className="inputbox"/>
        <p className="logout">Log Out</p>
    </nav>
    )
}

export default Navigation;