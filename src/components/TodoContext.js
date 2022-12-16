import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    return (
        <TodoContext.Provider 
            value={{ 
                todosValue: [todos, setTodos], 
                filteredTodosValue: [filteredTodos, setFilteredTodos]
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}