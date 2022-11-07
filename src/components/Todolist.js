import React from 'react';
import Todo from './Todo';
import './Todolist.css'

const Todolist = ({ todos, setTodos, labels, selectedLabel, setSelectedLabel, selectedTaskLabel, setSelectedTaskLabel }) => {
    return (
        <ul className="todolist-container">
            {todos.map((todo) => 
                (
                <Todo 
                task={todo.task} 
                key={todo.id} 
                labels={labels}
                setTodos={setTodos} 
                todos={todos}
                todo={todo}
                selectedTaskLabel={selectedTaskLabel}
                setSelectedTaskLabel={setSelectedTaskLabel} />
            ))}
        </ul>
    )
}
    

export default Todolist;


// const removeTaskHandler = () => {
//     setTodos(todos.filter((element) => element.id !== todo.id)); 
// }