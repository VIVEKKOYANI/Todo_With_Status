import React from "react";
import { Task } from "../types";
import { constants } from "../utils/constants";

interface TaskListProps {
  filteredTasks: Task[];
  page: number;
  onEdit: (task: Task) => void;
}

const Table: React.FC<TaskListProps> = ({ filteredTasks, page, onEdit }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>{constants.table.taskTitle}</th>
            <th>{constants.table.status}</th>
            <th>{constants.table.assignee}</th>
            <th>{constants.table.priority}</th>
            <th>{constants.table.duedate}</th>
            <th>{constants.table.action}</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.slice(page * 10 - 10, page * 10).map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.assignee}</td>
                <td>{task.priority}</td>
                <td>{task.dueDate}</td>
                <td>
                  <button className="editBtn" onClick={() => onEdit(task)}>
                    {constants.table.edit}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;