import React, { useState } from 'react';
import '../styles/App.css';

function TaskRow({ task, onDelete, onComplete, isCompleted }) {
  const [isFlying, setIsFlying] = useState(false);

  const handleComplete = () => {
    setIsFlying(true);
    setTimeout(() => {
      onComplete();
      setIsFlying(false);
    }, 500); // Match the duration of the CSS animation
  };

  return (
    <tr className={`task-row ${isFlying ? 'fly' : ''}`}>
      <td className={isCompleted ? 'completed-task' : ''}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleComplete}
          className="complete-checkbox"
        />
        {task.name} - <span className="eisenhower-label">{task.eisenhowerLabel}</span>
        <button onClick={onDelete} className="delete-button">Delete</button>
      </td>
    </tr>
  );
}

export default TaskRow;
