import React from 'react';
import '../styles/App.css';

function TaskRow({ task, onComplete, isCompleted }) {
  return (
    <tr className="task-row">
      <td className={isCompleted ? 'completed-task' : ''}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onComplete}
          className="complete-checkbox"
        />
        {task.name}
      </td>
    </tr>
  );
}

export default TaskRow;
