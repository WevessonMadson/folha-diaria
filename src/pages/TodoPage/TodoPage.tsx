import { useEffect, useState } from "react";

import TaskCard from "../../components/TaskCard/TaskCard";
import ButtonAdd from "../../assets/icons/add_task.svg";

import "./TodoPage.css";
import {
  useTodoList,
  type PriorityTaskType,
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

  function sortingTasks(tasks: TaskType[], status: StatusTaskType): TaskType[] {
    const priorityWeight: Record<PriorityTaskType, number> = {
      Alta: 1,
      Media: 2,
      Baixa: 3,
    };

    return tasks.slice().sort((a, b) => {
      const timeA = a.date ? new Date(a.date).getTime() : null;
      const timeB = b.date ? new Date(b.date).getTime() : null;

      if (status === "todo") {
        if (timeA !== timeB) {
          if (timeA === null) return 1;
          if (timeB === null) return -1;
          return timeA - timeB;
        }
        return priorityWeight[a.priority] - priorityWeight[b.priority];
      }

      // status === "done"
      return (timeB ?? 0) - (timeA ?? 0);
    });
  }

  useEffect(() => {
    let exibition = tasks.filter((task) => task.status === selected);

    if (exibition.length > 1) exibition = sortingTasks(exibition, selected);

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
