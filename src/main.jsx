import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import { TASKS } from './tasks';
import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoApp tasks={TASKS} />
);
