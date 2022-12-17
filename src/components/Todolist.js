import React, {useContext, useEffect, useState} from 'react';
import Todo from './Todo';
import { TodoContext } from './TodoContext'
import './Todolist.css'

const Todolist = ({ status,  }) => {
    const [todos] = useContext(TodoContext);
    const [filteredTodos, setFilteredTodos] = useState([])

    const filterHandler = () => {
        if (status.labelId === "0" && status.priority === false) {
            setFilteredTodos(todos);
        } else if (status.priority === true) {
            setFilteredTodos(todos.sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0)))
            console.log(filteredTodos)
        } 
        else {
        setFilteredTodos(todos.filter((todo) => todo.labelId === status.labelId))
        }
    }

    useEffect(() => {
        filterHandler();
        }, [todos, status])

    
    
        
    return (
        <ul className="todolist-container">
            {filteredTodos.map((todo) => 
                (
                <Todo 
                key={todo.id} 
                task={todo.task} 
                todo={todo}
                />
            ))}
        </ul>
    )
}
    

export default Todolist;


// const removeTaskHandler = () => {
//     setTodos(todos.filter((element) => element.id !== todo.id)); 
// }