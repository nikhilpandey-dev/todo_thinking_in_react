import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskTable from './TaskTable';
import ToggleSwitch from './ToggleSwitch';
import '../styles/App.css';

function TodoApp({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);

  const handleAddTask = (taskName, taskCategory) => {
    const newTask = { id: Date.now(), category: taskCategory, name: taskName };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    const taskToComplete = taskList.find((task) => task.id === taskId);
    if (taskToComplete) {
      setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      setCompletedTasks((prevTasks) => [...prevTasks, taskToComplete]);
    } else {
      const taskToUncomplete = completedTasks.find((task) => task.id === taskId);
      if (taskToUncomplete) {
        setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        setTaskList((prevTasks) => [...prevTasks, taskToUncomplete]);
      }
    }
  };

  const handleToggleShowCompletedTasks = () => {
    setShowCompletedTasks((prevShow) => !prevShow);
  };

  return (
    <div className="todo-app">
      <AddTask onAddTask={handleAddTask} />
      <h2>Tasks</h2>
      <TaskTable tasks={taskList} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} isCompleted={false} />
      <h2>Show Completed Tasks</h2>
      <ToggleSwitch isChecked={showCompletedTasks} onToggle={handleToggleShowCompletedTasks} />
      {showCompletedTasks && (
        <div>
          <h2>Completed Tasks</h2>
          <TaskTable tasks={completedTasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} isCompleted={true} />
        </div>
      )}
    </div>
  );
}

export default TodoApp;
