import React, {useContext} from 'react';
import Todo from './Todo';
import { TodoContext } from './TodoContext'
import './Todolist.css'

const Todolist = ( ) => {
    const [todos] = useContext(TodoContext);
    return (
        <ul className="todolist-container">
            {todos.map((todo) => 
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