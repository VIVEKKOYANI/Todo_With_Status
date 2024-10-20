import React from "react";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  page: number;
  selectPageHandler: (value: number) => void;
}

const Pagination: React.FC<TaskListProps> = ({ tasks, page, selectPageHandler }) => {

  return (
    <div>
      {tasks?.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>

          {[...Array(Math.ceil(tasks.length / 10))].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < tasks.length / 10 ? "" : "pagination__disable"}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;