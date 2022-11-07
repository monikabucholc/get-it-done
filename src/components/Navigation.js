import React from 'react';
import Inputbox from './Inputbox';
import './Navigation.css';



const Navigation = ({ inputTask, setInputTask, todos, setTodos }) => {
    return (
    <nav className="navbar">
       <img src={require("../images/Getitdone.png")} width="184" height="24" alt="Get It Done!" className="logo"/>
        <Inputbox className="inputbox"
            inputTask={inputTask} 
            setInputTask={setInputTask}
            todos={todos}
            setTodos={setTodos} />
        <p className="logout">Log Out</p>
    </nav>
    )
}

export default Navigation;