export interface Task {
  id: string;
  title: string;
  description?: string;
  assignee: string;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  status: "To Do" | "In Progress" | "Completed";
}

export interface TaskFormData {
  id: string;
  title: string;
  description?: string;
  assignee: string;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  status: "To Do" | "In Progress" | "Completed";
}