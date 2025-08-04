import { useEffect, useState } from "react";

import TaskCard from "../../components/TaskCard/TaskCard";
import ButtonAdd from "../../assets/icons/add_task.svg";

import "./TodoPage.css";
import {
  useTodoList,
  type StatusTaskType,
  type TaskType,
} from "../../contexts/TodoListContext";
import CreateTask from "../../components/CreateTask/CreateTask";

const TodoPage = () => {
  const { tasks, deleteTask, finishTask, unFinishTask } = useTodoList();
  const [selected, setSelected] = useState<StatusTaskType>("todo");
  const [createTaskIsOpen, setCreateTaskIsOpen] = useState(false);
  const [tasksForExibition, setTasksForExibition] = useState(tasks);
  const [taskToEdit, setTaskToEdit] = useState<TaskType | undefined>(undefined);

  const closeCreateTask = () => {
    setCreateTaskIsOpen(false);
    setTaskToEdit(undefined);
  };

  const handleEdit = (task: TaskType) => {
    setTaskToEdit(task);
    setCreateTaskIsOpen(true);
  };

  useEffect(() => {
    const exibition = tasks.filter((task) => task.status === selected);
    setTasksForExibition(exibition);
  }, [tasks, selected]);

  return (
    <>
      {createTaskIsOpen ? (
        <CreateTask onClose={closeCreateTask} editingTask={taskToEdit} />
      ) : (
        <div className="page">
          <div className="tab-container">
            <button
              className={`button tab ${selected === "todo" ? "active" : ""}`}
              onClick={() => setSelected("todo")}
            >
              A FAZER
            </button>
            <button
              className={`button tab ${selected === "done" ? "active" : ""}`}
              onClick={() => setSelected("done")}
            >
              FEITO
            </button>
          </div>
          <div className="task-list">
            {!tasksForExibition.length
              ? "Sem tarefas aqui"
              : tasksForExibition.map((task) => {
                  if (task.status === selected) {
                    return (
                      <TaskCard
                        title={task.title}
                        priority={task.priority}
                        date={task.date}
                        status={task.status}
                        onEdit={() => handleEdit(task)}
                        onDelete={() => deleteTask(task.id)}
                        onMarkAsDone={() => finishTask(task.id)}
                        onMarkAsTodo={() => unFinishTask(task.id)}
                      />
                    );
                  }
                })}
          </div>
          <button
            className="button button-add-task"
            onClick={() => setCreateTaskIsOpen(true)}
          >
            <img src={ButtonAdd} alt="Botão para adicionar tarefa" />
          </button>
        </div>
      )}
    </>
  );
};

export default TodoPage;
