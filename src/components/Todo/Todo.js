import React, { useContext } from 'react';
import { LabelContext } from '../../context/LabelContext';
import { TodoContext } from '../../context/TodoContext';
import Dropdown from 'react-bootstrap/Dropdown';
import Alertedit from '../AlertEdit/Alertedit'
import './Todo.css';


const Todo = ({ task, todo }) => {
    const [labels] = useContext(LabelContext);
    const [todos, setTodos] = useContext(TodoContext);

    const removeTaskHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id)); 
        //Remove last item from Local Storage
        if (todos.length === 1) {
            sessionStorage.setItem("todos", JSON.stringify([]))
        };
    }

    const completeHandler = () => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id) {
                return {
                ...element,
                completed: !element.completed
                };
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
                            color: "rgb(243, 207, 19)",
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
                return l;
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
            style= {{ borderLeft: `24px solid ${todo.color}` }}>
                <div className="task">
                    <div className="task-name">{task}</div>
                    <div className="btns">
                        <Alertedit todo={todo} name="edit"/>
                        <button onClick={removeTaskHandler} className="btn" name="bin"><i className="fa-solid fa-trash" /></button>
                        <button onClick={completeHandler} className="btn" name="completed"><i className={ todo.completed ? "fa-solid fa-spinner" : "fa-solid fa-check" }/></button>
                    </div>
                </div>
                <div className="task-actions">
                    <div className="label">
                        <span>Label:</span>
                        <Dropdown onSelect={taskLabelHandler}>
                            <Dropdown.Toggle  className="label-dropdown" id="dropdown-basic">
                                <i className="fa-solid fa-tag" style={{ color: `${todo.color}` }} />
                                    <span>{ todo.labelId !== "0" ? todo.label : "Choose label" }</span>
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
                    </div>
                    <div className="priority">
                        <span>Priority:</span>
                        <Dropdown onSelect={priorityHandler}>
                            <Dropdown.Toggle  className="priority-dropdown" id="dropdown-basic">
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
                    </div>
                    <div className="period">
                        <span>Period:</span>
                        <input onChange={startDateHandler} value={todo.startDate} type="date" id="range_start" className="input_date"/>
                        <span> - </span>
                        <input onChange={endDateHandler} value={todo.endDate} type="date" id="range_end" className="input_date"/>
                    </div>       
                </div>
            </li>
        </div>
    )
}
export default Todo;
