import React from 'react';
import '../styles/App.css';

function TaskRow({ task, onDelete, onComplete }) {
  return (
    <tr className="task-row">
      <td>
        <input
          type="checkbox"
          onChange={onComplete}
          className="complete-checkbox"
        />
        {task.name}
        <button onClick={onDelete} className="delete-button">Delete</button>
      </td>
    </tr>
  );
}

export default TaskRow;
