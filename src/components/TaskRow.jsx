import React from 'react';
import '../styles/App.css';

function TaskRow({ task }) {
  return (
    <tr>
      <td className="task-row">{task}</td>
    </tr>
  );
}

export default TaskRow;
