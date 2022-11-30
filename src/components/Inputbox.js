import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

import './Inputbox.css';
import _uniqueId from 'lodash/uniqueId';

const Inputbox = () => {
    const [todos, setTodos] = useContext(TodoContext);
    const [inputTask, setInputTask] = useState("");
    
    const inputTaskHandler = (event) => {
        setInputTask(event.target.value);
    }

    const addHandler = (event) => {
        event.preventDefault();
        setTodos([...todos, {
            task: inputTask,
            completed: false,
            date: "",
            priority: 1,
            label: "",
            color: "rgb(178, 183, 190)",
            labelId: 0,
            id: _uniqueId()
            }]);
        setInputTask("");
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13)
        addHandler(inputTask);
    }

    return (
        <form method="POST" className="todo-input">
            <input 
                onKeyDown={handleKeyDown} 
                value={inputTask}
                onChange={inputTaskHandler} 
                type="text" 
                className="input" 
                placeholder="Add a new Task"
            />
            <button onClick={addHandler} type="submit" className="todo-btn" name="addtask">Add</button>
        </form>
    )
}

export default Inputbox;
