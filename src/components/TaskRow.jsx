import React from 'react';
import '../styles/App.css';

function TaskRow({ task, onDelete }) {
  return (
    <tr className="task-row">
      <td>
        {task}
        {/*<!-- Moved inside the same cell -->  */}
        <button onClick={onDelete} className="delete-button">Delete</button> 
      </td>
    </tr>
  );
}

export default TaskRow;
