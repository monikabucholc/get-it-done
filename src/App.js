import React, { useState } from 'react';

import './App.css'

//Components
import Navigation from './components/Navigation/Navigation';
import Sidemenu from './components/Sidemenu/Sidemenu';
import Todolist from './components/Todolist/Todolist';

//Contexts
import { LabelProvider } from './components/context/LabelContext';
import { TodoProvider } from './components/context/TodoContext'

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
