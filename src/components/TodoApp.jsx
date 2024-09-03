import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskTable from './TaskTable';
import ToggleSwitch from './ToggleSwitch';
import '../styles/App.css';

function TodoApp({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);
  const [activeTab, setActiveTab] = useState('classic');

  const handleAddTask = (taskName, taskCategory, eisenhowerLabel) => {
    const newTask = { id: Date.now(), category: taskCategory, name: taskName, eisenhowerLabel };
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

  const renderTasksByLabel = (label) => {
    return taskList
      .filter((task) => task.eisenhowerLabel === label)
      .map((task) => (
        <div key={task.id} className={`eisenhower-task category-${task.category.toLowerCase()}`}>
          {task.name}
        </div>
      ));
  };

  return (
    <div className="todo-app">
      <AddTask onAddTask={handleAddTask} />
      <div className="tabs">
        <div className={`tab ${activeTab === 'classic' ? 'active' : ''}`} onClick={() => setActiveTab('classic')}>
          Classic
        </div>
        <div className={`tab ${activeTab === 'eisenhower' ? 'active' : ''}`} onClick={() => setActiveTab('eisenhower')}>
          Eisenhower
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'classic' && (
          <>
            <h2>Tasks</h2>
            <TaskTable tasks={taskList} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
          </>
        )}
        {activeTab === 'eisenhower' && (
          <>
            <h2>Eisenhower Matrix</h2>
            <div className="eisenhower-matrix">
              <div className="eisenhower-cell">
                <h3>Urgent & Important</h3>
                {renderTasksByLabel('Urgent & Important')}
              </div>
              <div className="eisenhower-cell">
                <h3>Not Urgent & Important</h3>
                {renderTasksByLabel('Not Urgent & Important')}
              </div>
              <div className="eisenhower-cell">
                <h3>Urgent & Not Important</h3>
                {renderTasksByLabel('Urgent & Not Important')}
              </div>
              <div className="eisenhower-cell">
                <h3>Not Urgent & Not Important</h3>
                {renderTasksByLabel('Not Urgent & Not Important')}
              </div>
            </div>
          </>
        )}
      </div>
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
