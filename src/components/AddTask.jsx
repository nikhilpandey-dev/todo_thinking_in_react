import React, { useState } from 'react';
import '../styles/App.css';

function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('Work');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(taskName, taskCategory);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add Task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
        className="task-select"
      >
        <option value="Work">Work</option>
        <option value="Family">Family</option>
        <option value="Personal">Personal</option>
        <option value="Hobby Ideas">Hobby Ideas</option>
      </select>
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default AddTask;
