import React, {useContext, useEffect, useState} from 'react';
import Todo from './Todo';
import { TodoContext } from './TodoContext'
import './Todolist.css'

const Todolist = ({ status }) => {
    const [todos] = useContext(TodoContext);
    const [filteredTodos, setFilteredTodos] = useState([])
   


    useEffect(() => {
        if (status.labelId !== "0") {
            setFilteredTodos(todos.filter((todo) => todo.labelId === status.labelId))
            setFilteredTodos(todos);
        } else if (status.priority === true) {
            let tempTodos = [...todos];
            setFilteredTodos(tempTodos.sort((a,b) => (a.priority - b.priority) ))
        } 
        else if (status.startDate === true) {
            let tempTodos = [...todos];
            setFilteredTodos(tempTodos.sort((a,b) => {
                let dateA = new Date (a.startDate);
                let dateB = new Date (b.startDate);
                return (dateA - dateB);
            } ))
        }
        else if (status.endDate === true) {
            let tempTodos = [...todos];
            setFilteredTodos(tempTodos.sort((a,b) => {
                let dateA = new Date (a.endDate);
                let dateB = new Date (b.endDate);
                return (dateA - dateB);
            } ))
        }
        else {
            setFilteredTodos(todos);
        }
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