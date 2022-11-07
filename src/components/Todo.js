import React from 'react';
import './Todo.css';


const Todo = ({ labels, task, todo, setTodos, todos, selectedTaskLabel, setSelectedTaskLabel }) => {
    const removeTaskHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id)); 
        console.log("test");
    }

    const completeHandler = () => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id) {
                return {
                ...element,
                completed: !element.completed
                }
            }
            return element;
        }))
    }

    

    return (
        <div>
            <li 
                className={`todo-item ${todo.completed ? "completed" : ""}`} 
                style= {{ border: "8px solid #B2B7BE" }}>
                <div className="task">
                    <div className="task-name">{task}</div>
                    <div className="btns">
                        <button onClick={removeTaskHandler} className="done-btn" name="bin"><i className="fa-solid fa-trash" /></button>
                        <button onClick={completeHandler} className="done-btn" name="completed"><i className="fa-solid fa-check" /></button>
                    </div>
                </div>
                <div className="task-actions">
                    <div className="tag-name-label"><i className="fa-solid fa-tag" /> Label</div>
                    <select className="select-tags" name="select-tags"  >
                        <option className="select-tags-options" value="none" name="none"></option>
                        {labels.map((element) => (
                            <option className="select-tags-options" value={element.name} name={element.name}>{element.name}</option>
                        ))}
                    </select>
                </div>
            </li>
        </div>
    )
}
    

export default Todo;
