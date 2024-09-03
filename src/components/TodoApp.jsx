import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskTable from './TaskTable';
import '../styles/App.css';

function TodoApp({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleAddTask = (taskName, taskCategory) => {
    const newTask = { id: Date.now(), category: taskCategory, name: taskName };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-app">
      <AddTask onAddTask={handleAddTask} />
      <TaskTable tasks={taskList} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default TodoApp;
