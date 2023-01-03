import React, { useContext } from 'react';
import { LabelContext } from './LabelContext';
import { TodoContext } from './TodoContext';
import Dropdown from 'react-bootstrap/Dropdown';
import './Todo.css';


const Todo = ({ task, todo, completedTodos, setCompletedTodos, deletedTodos, setDeletedTodos }) => {
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
        
    const priorityHandler = (event) => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id) {
                return {
                ...element,
                priority: event
                }
            }
            return element;
        }))
    }

    const startDateHandler = (event) => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id) {
                return {
                ...element,
                startDate: event.target.value
                }
            }
            return element;
        }))
    }

    const endDateHandler = (event) => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id) {
                return {
                ...element,
                endDate: event.target.value
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
                    <Dropdown onSelect={taskLabelHandler}>
                        <Dropdown.Toggle  variant="success" id="dropdown-basic">
                            <i className="fa-solid fa-tag" style={{ color: `${todo.color}` }} />
                                { todo.labelId !== "0" ? todo.label : "Choose label" }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="0">No label</Dropdown.Item>
                            {labels.map((element) => (
                            <Dropdown.Item key={element.id} eventKey={element.id}>
                                {element.name}
                            </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={priorityHandler}>
                        <Dropdown.Toggle  variant="success" id="dropdown-basic">
                            <i className="fa-solid fa-star" />
                               { todo.priority } 
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item key="1" eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item key="2" eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item key="3" eventKey="3">3</Dropdown.Item>
                            <Dropdown.Item key="4" eventKey="4">4</Dropdown.Item>
                            <Dropdown.Item key="5" eventKey="5">5</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <label className="filter">
                        <span>Period</span>
                     
                            <input onChange={startDateHandler} type="date" id="range_start" className="input_date"/>
                                <span> - </span>
                            <input onChange={endDateHandler} type="date"id="range_end" className="input_date"/>
                            
                     
                    </label>
                </div>
            </li>
        </div>
    )
}
    

export default Todo;
