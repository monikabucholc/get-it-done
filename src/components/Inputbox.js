import React from 'react';
import './Inputbox.css';
import _uniqueId from 'lodash/uniqueId';

const Inputbox = ({ inputTask, setInputTask, todos, setTodos }) => {
    
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
            tag: "",
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
