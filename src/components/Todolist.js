import React, {useContext, useEffect} from 'react';
import Todo from './Todo';
import { TodoContext } from './TodoContext'
import './Todolist.css'

const Todolist = ({ status,  }) => {
    const { todosValue, filteredTodosValue } = useContext(TodoContext);
    const [todos] = todosValue;
    const [filteredTodos, setFilteredTodos] = filteredTodosValue;

    useEffect(() => {
        console.log("elo");
        filterHandler();
        }, [todos, status])


        const filterHandler = () => {
            if (status.labelId === "0") {
                setFilteredTodos(todos);
            } else {
            setFilteredTodos(todos.filter((todo) => todo.labelId === status.labelId))
            }
        }
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