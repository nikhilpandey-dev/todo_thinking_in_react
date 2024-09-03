import React, { useState } from 'react';
import { EisenhowerLabel } from '../constants/EisenhowerLabel';
import '../styles/App.css';

function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('Work');
  const [eisenhowerLabel, setEisenhowerLabel] = useState(EisenhowerLabel.URGENT_IMPORTANT);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(taskName, taskCategory, eisenhowerLabel);
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
      <select
        value={eisenhowerLabel}
        onChange={(e) => setEisenhowerLabel(e.target.value)}
        className="task-select"
      >
        {Object.values(EisenhowerLabel).map((label) => (
          <option key={label} value={label}>{label}</option>
        ))}
      </select>
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default AddTask;
