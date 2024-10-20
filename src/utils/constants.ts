export const constants = {
  projectDashboard: "Project Dashboard",
  createTask: "Create Task",
  filterbyStatus: "Filter by Status:",
  table: {
    taskTitle: "Task Title",
    status: "Status",
    assignee: "Assignee",
    priority: "Priority",
    duedate: "Due Date",
    action: "Action",
    edit: "🖍 Edit",
  },
  formName: {
    title: 'title',
    description: 'description',
    assignee: 'assignee',
    priority: 'priority',
    dueDate: 'dueDate',
    status: 'status'
  },
  formLabel: {
    title: 'Title',
    description: 'Description',
    assignee: 'Assignee',
    priority: 'Priority',
    dueDate: 'Due Date',
    update: 'Update',
    save: 'Save',
    cancel: 'Cancel',
    taskModal: 'Task Modal'
  },
  inputType: {
    text: 'text',
    date: 'date',
    submit: 'submit',
    button: "button"
  },
  className: {
    modal: 'modal',
    modalcontent: 'modal-content',
    modalheader: 'modal-header',
    close: 'close',
    error: 'error',
    modalbtn: 'modal-btn',
    modalbtnsave: 'modal-btn-save',
    modalbtncancel: 'modal-btn-cancel'
  }
};

export const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export const statusOptions = [
  { value: "To Do", label: "To Do" },
  { value: "In Progress", label: "In Progress" },
  { value: "Completed", label: "Completed" },
];