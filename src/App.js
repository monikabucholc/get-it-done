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


  const [status, setStatus] = useState({
    labelId: "0",
    date: false,
    priority: false
    });
  return (
    <div className="App">
      <LabelProvider>
        <TodoProvider>
          <Navigation/>
          <div className="Content">
            <Sidemenu 
              status={status}
              setStatus={setStatus}
            />
            <Todolist 
              status={status}
              setStatus={setStatus}
            />
          </div>
        </TodoProvider>
      </LabelProvider>
    </div>  
  );
}

export default App;
