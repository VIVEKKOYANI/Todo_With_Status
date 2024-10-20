import React, { useState, useEffect } from "react";
import { Task } from "../types";
import Table from "./Table";

interface TaskListProps {
  tasks: Task[];
  page: number;
  filterStatus: string;
  onEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, page, onEdit, filterStatus }) => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    if (filterStatus === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === filterStatus));
    }
  }, [filterStatus, tasks]);

  return (
    <div>
      <Table filteredTasks={filteredTasks} page={page} onEdit={onEdit} />
    </div>
  );
};

export default TaskList;