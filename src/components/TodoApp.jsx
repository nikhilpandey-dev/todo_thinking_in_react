import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskTable from './TaskTable';
import '../styles/App.css';

function TodoApp({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleAddTask = (taskName, taskCategory) => {
    const newTask = { category: taskCategory, name: taskName };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="todo-app">
      <AddTask onAddTask={handleAddTask} />
      <TaskTable tasks={taskList} />
    </div>
  );
}

export default TodoApp;
