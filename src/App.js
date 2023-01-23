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
    filterStatus: ""
  });

  const [showMenu, setShowMenu] = useState(false);
    
  return (
    <div className="app">
      <LabelProvider>
        <TodoProvider>
          <Navigation 
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <div className="content">
            <Sidemenu 
              status={status}
              setStatus={setStatus}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
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
