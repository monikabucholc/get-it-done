import React, { useContext } from 'react';
import { LabelContext } from './LabelContext';
import { TodoContext } from './TodoContext';
import Dropdown from 'react-bootstrap/Dropdown';
import './Todo.css';


const Todo = ({ task, todo }) => {
    const [labels] = useContext(LabelContext);
    const { todosValue } = useContext(TodoContext);
    const [todos, setTodos] = todosValue;
    //const [filteredTodos, setFilteredTodos] = filteredTodosValue;
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
        console.log(event)
        if (event === "0") {
            setTodos(todos.map((element) => {
                if (element.id === todo.id) {
                    return {
                        ...element,
                            label: "",
                            color: "rgb(178, 183, 190)",
                            labelId: "0"
                    }  
                }
            return element;
            }))
        } else { 
            labels.map((l) => {
                if (l.id === event) {
                    setTodos(todos.map((element) => {
                        if (element.id === todo.id) {
                            return {
                                ...element,
                                label: l.name,
                                color: l.color,
                                labelId: l.id
                            }  
                        }
                    return element;
                    }))
                }
                return l 
            })
        }
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
                    <Dropdown onSelect={taskLabelHandler}>
                        <Dropdown.Toggle  variant="success" id="dropdown-basic">
                            <i className="fa-solid fa-tag" style={{ color: `${todo.color}` }} />
                                { todo.labelId !== "0" ? todo.label : "Choose label" }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="0">No label</Dropdown.Item>
                            {labels.map((element) => (
                            <Dropdown.Item eventKey={element.id}>
                                {element.name}
                            </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </li>
        </div>
    )
}
    

export default Todo;
