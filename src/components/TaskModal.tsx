import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TaskFormData } from "../types";
import FormProvider, { RHFSelect, RHFTextField } from "./hook-form";
import { constants, priorityOptions, statusOptions } from "../utils/constants";

// Validation schema
const taskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  dueDate: yup.string().required("Due date is required"),
  assignee: yup.string().required("Assignee is required"),
  priority: yup.string().required("Priority is required"),
  status: yup.string().required("Status is required"),
});

interface TaskModalProps {
  task?: TaskFormData;
  onSubmit: (data: TaskFormData) => void;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onSubmit, onClose }) => {
  const methods = useForm<TaskFormData>({
    resolver: yupResolver(taskSchema),
    defaultValues: task || {
      title: "",
      description: "",
      assignee: "",
      priority: "Low",
      dueDate: "",
      status: "To Do",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const modalRef = useRef<HTMLDivElement>(null);

  const submitForm = (data: TaskFormData) => {
    onSubmit(data);
  };

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={constants.className.modal}>
      <div className={constants.className.modalcontent}>
        <div className={constants.className.modalheader}>
          <h2>{constants.formLabel.taskModal}</h2>
          <span className={constants.className.close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div>
          <FormProvider onSubmit={handleSubmit(submitForm)} methods={methods}>
            <RHFTextField
              name={constants.formName.title}
              label={constants.formLabel.title}
              type={constants.inputType.text}
            />
            <p className={constants.className.error}>{errors.title?.message}</p>
            <RHFTextField
              name={constants.formName.description}
              label={constants.formLabel.description}
              type={constants.inputType.text}
            />
            <RHFTextField
              name={constants.formName.assignee}
              label={constants.formLabel.assignee}
              type={constants.inputType.text}
            />
            <p className={constants.className.error}>
              {errors.assignee?.message}
            </p>
            <RHFSelect
              name={constants.formName.priority}
              label={constants.formLabel.priority}
              options={priorityOptions}
            />
            <p className={constants.className.error}>
              {errors.priority?.message}
            </p>
            <RHFTextField
              name={constants.formName.dueDate}
              label={constants.formLabel.dueDate}
              type={constants.inputType.date}
            />
            <p className={constants.className.error}>
              {errors.dueDate?.message}
            </p>
            <RHFSelect
              name={constants.formName.status}
              label={constants.table.status}
              options={statusOptions}
            />
            <p className={constants.className.error}>
              {errors.status?.message}
            </p>

            <div className={constants.className.modalbtn}>
              <button
                type={constants.inputType.submit}
                className={constants.className.modalbtnsave}
              >
                {task ? constants.formLabel.update : constants.formLabel.save}
              </button>
              <button
                type={constants.inputType.button}
                className={constants.className.modalbtncancel}
                onClick={onClose}
              >
                {constants.formLabel.cancel}
              </button>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;