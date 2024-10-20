import React, { useState } from "react";
import TaskList from "../components/TaskList";
import TaskModal from "../components/TaskModal";
import { Task, TaskFormData } from "../types";
import { v4 as uuidv4 } from "uuid";
import { data } from "../_mock/TaskData";
import { constants } from "../utils/constants";
import Pagination from "../components/pagination";

const ProjectDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskFormData | null>(null);
  const [page, setPage] = useState(1);

  const handleSaveTask = (taskData: TaskFormData) => {
    if (editingTask) {
      // Edit existing task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id
            ? { ...taskData, id: editingTask.id }
            : task
        )
      );
    } else {
      // Add new task
      setTasks([...tasks, { ...taskData, id: uuidv4() }]);
    }
    setModalOpen(false);
    setEditingTask(null);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingTask(null);
  };

  const selectPageHandler = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(tasks.length / 10) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      <h1>{constants.projectDashboard}</h1>
      <div className="addTask">
        <button onClick={() => setModalOpen(true)}>
          {constants.createTask}
        </button>
        <div className="filter">
          <label>{constants.filterbyStatus} </label>
          <select onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <TaskList
        tasks={tasks}
        page={page}
        onEdit={handleEditTask}
        filterStatus={filterStatus}
      />
      <Pagination
        tasks={tasks}
        page={page}
        selectPageHandler={selectPageHandler}
      />
      {modalOpen && (
        <TaskModal
          task={editingTask}
          onSubmit={handleSaveTask}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProjectDashboard;