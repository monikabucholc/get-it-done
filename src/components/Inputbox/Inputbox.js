import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './Inputbox.css';
import uniqid from 'uniqid';

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
            startDate: "",
            endDate: "",
            priority: "1",
            label: "",
            color: "rgb(243, 207, 19)",
            labelId: "0",
            id: uniqid()
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
