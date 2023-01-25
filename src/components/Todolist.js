import React, {useContext, useEffect, useState} from 'react';
import Todo from './Todo';
import { TodoContext } from './TodoContext'
import './Todolist.css'

const Todolist = ({ status }) => {
    const [todos, setTodos] = useContext(TodoContext);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);
   
    useEffect(() => {
        console.log(todos)
        const futureDate = new Date(8640000000000000);
        //Save to Local Storage
        if (todos.length > 0 ) {
            localStorage.setItem("todos", JSON.stringify(todos));
        } 
        //Sort and filter
        //Filter by label
        if (status.labelId !== "0") {
            setFilteredTodos(todos.filter((todo) => !todo.completed && todo.labelId === status.labelId))
        } 
        //Sort by Priority
        else if (status.filterStatus === "priority") {
            let tempTodos = [...todos.filter((todo) => !todo.completed)];
            setFilteredTodos(tempTodos.sort((a,b) => (a.priority - b.priority) ));
        } 
        //Sort by StartDate
        else if (status.filterStatus === "start-date") {
            let tempTodos = [...todos.filter((todo) => !todo.completed)];
            setFilteredTodos(tempTodos.sort((a,b) => {
                let dateA = a.startDate ? new Date (a.startDate) : futureDate;
                let dateB = b.startDate ? new Date (b.startDate) : futureDate;
                return (dateA - dateB);
            }))
        } 
        //Sort by EndDate
        else if (status.filterStatus === "end-date") {
            let tempTodos  = [...todos.filter((todo) => !todo.completed)];
            setFilteredTodos(tempTodos.sort((a,b) => {
                let dateA = a.endDate ? new Date (a.endDate) : futureDate;
                let dateB = b.endDate ? new Date (b.endDate) : futureDate;
                return (dateA - dateB);
            } ))
        } 
        //Sort by status completed or to-do
        else if (status.filterStatus === "completed") {
            setFilteredTodos(todos.filter((todo) => todo.completed === true));
        } else {
            setFilteredTodos(todos.filter((todo) => todo.completed !== true));
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

