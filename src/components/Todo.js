import React, { useContext } from 'react';
import { LabelContext } from './LabelContext';
import { TodoContext } from './TodoContext';
import './Todo.css';


const Todo = ({ task, todo }) => {
    const [labels] = useContext(LabelContext);
    const [todos, setTodos] = useContext(TodoContext);
    const removeTaskHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id)); 
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

   const taskLabelHandler = (event) => {
    setTodos(todos.map((element) => {
        if (element.id === todo.id) {
            return {
            ...element,
            label: event.target.value,
            color: event.target.options[event.target.selectedIndex].getAttribute('data-color'),
            labelId: event.target.options[event.target.selectedIndex].getAttribute('data-labelId')
            }
        }
        return element;
    }))
   }
    

   
    return (
        <div>
            <li 
            className={`todo-item ${todo.completed ? "completed" : ""}`} 
            style= {{ border: `6px solid ${todo.color}` }}>
                <div className="task">
                    <div className="task-name">{task}</div>
                    <div className="btns">
                        <button onClick={removeTaskHandler} className="done-btn" name="bin"><i className="fa-solid fa-trash" /></button>
                        <button onClick={completeHandler} className="done-btn" name="completed"><i className="fa-solid fa-check" /></button>
                    </div>
                </div>
                <div className="task-actions">
                    <div className="tag-name-label"><i className="fa-solid fa-tag" /> Label</div>
                    <select onChange={taskLabelHandler} id="select-tags" className="select-tags" name="select-tags">
                        <option className="select-tags-options" value="" data-labelId="0" data-color="rgb(178, 183, 190)" name="none" selected></option>
                        {labels.map((element) => (
                            <option className="select-tags-options" 
                                data-labelId={element.id}
                                data-color={element.color}
                                value={element.name}
                                name={element.name}>
                                    {element.name}
                            </option>
                        ))}
                    </select>
                </div>
            </li>
        </div>
    )
}
    

export default Todo;
