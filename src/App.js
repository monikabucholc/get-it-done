import React, { useState } from 'react';

import './App.css'

//Components
import Navigation from './components/Navigation';
import Sidemenu from './components/Sidemenu';
import Todolist from './components/Todolist';

//Contexts
import { LabelProvider } from './components/LabelContext';
import { TodoProvider } from './components/TodoContext'

function App() {
  
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [taskLabel, setTaskLabel] = useState("");

  // const [date, setDate] = useState("");
  // const [priority, setPriority] = useState(1);
  // const [filteredTodos, setFilteredTodos] = useState([]);



  return (
    <div className="App">
      <LabelProvider>
        <TodoProvider>
          <Navigation/>
          <div className="Content">
            <Sidemenu 
              selectedLabel={selectedLabel}
              setSelectedLabel={setSelectedLabel}
            />
            <Todolist 
              filteredTodos={filteredTodos}
              setFilteredTodos={setFilteredTodos}
              selectedLabel={selectedLabel}
              setSelectedLabel={setSelectedLabel}
              taskLabel={taskLabel}
              setTaskLabel={setTaskLabel}/>
          </div>
        </TodoProvider>
      </LabelProvider>
    </div>  
  );
}

export default App;
