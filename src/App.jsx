import React from 'react';
import TodoApp from './components/TodoApp';
import { TASKS } from './tasks';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <TodoApp tasks={TASKS} />
    </div>
  );
}

export default App;
