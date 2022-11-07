import React, { useState } from 'react';
import './App.css'

//Custom components
import Navigation from './components/Navigation';
import Sidemenu from './components/Sidemenu';
import Todolist from './components/Todolist';

//Files
// import './App.css';

function App() {
  const [inputTask, setInputTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputLabel, setInputLabel] = useState("");
  const [labels, setLabels] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [selectedTaskLabel, setSelectedTaskLabel] = useState("");

  // const [date, setDate] = useState("");
  // const [priority, setPriority] = useState(1);
  // const [filteredTodos, setFilteredTodos] = useState([]);



  return (
    <div className="App">
      <Navigation 
        inputTask={inputTask} 
        setInputTask={setInputTask}
        todos={todos}
        setTodos={setTodos}/>
      <div className="Content">
        <Sidemenu 
          labels={labels}
          setLabels={setLabels}
          setInputLabel={setInputLabel}
          inputLabel={inputLabel}
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
        />
        <Todolist 
          todos={todos}
          setTodos={setTodos}
          labels={labels}
          setLabel={setLabels}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
          selectedTaskLabel={selectedTaskLabel}
          setSelectedTaskLabel={setSelectedTaskLabel}/>
      </div>
    </div>  
  );
}

export default App;
