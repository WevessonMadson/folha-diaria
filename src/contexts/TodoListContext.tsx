import { createContext, useContext, useEffect, useState } from "react";

export type TaskType = {
  id: number;
  title: string;
  priority: "Baixa" | "Media" | "Alta";
  date: string /* data para concluir ou data de conclusão */;
  status: "todo" | "done";
};

export type NewTaskType = Omit<TaskType, "id" | "status">;

type TodoListContextType = {
  tasks: TaskType[];
  addTask: (newTask: NewTaskType) => void;
  editTask: (id: number, newTask: NewTaskType) => void;
  deleteTask: (id: number) => void;
  finishTask: (id: number) => void;
  unFinishTask: (id: number) => void;
};

const inicialStateTasks: TaskType[] = JSON.parse(
  localStorage.getItem("tasks") || "[]"
);

const TodoListContext = createContext<TodoListContextType | undefined>(
  undefined
);

export const TodoListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState(inicialStateTasks);

  const getLastId = () => {
    let lastId = 0;

    tasks.forEach((task) => {
      if (task.id > lastId) lastId = task.id;
    });

    return lastId;
  };

  const addTask = (newTask: NewTaskType) => {
    if (newTask.date) {
      const [year, month, day] = newTask.date.split("-");
      newTask.date = `${day}/${month}/${year}`;
    }

    const newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks.push({ id: getLastId() + 1, status: "todo", ...newTask });

    setTasks(newTasks);
  };

  const editTask = (id: number, newTask: NewTaskType) => {
    let newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks = newTasks.map((task: TaskType) => {
      if (task.id === id)
        return { id: task.id, status: task.status, ...newTask };
      return task;
    });

    setTasks(newTasks);
  };

  const deleteTask = (id: number) => {
    let newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks = newTasks.filter((task: TaskType) => task.id !== id);
    setTasks(newTasks);
  };

  const finishTask = (id: number) => {
    let newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Janeiro = 0
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    newTasks = newTasks.map((task: TaskType) => {
      if (task.id === id)
        return { ...task, status: "done", date: formattedDate };

      return task;
    });

    setTasks(newTasks);
  };

  const unFinishTask = (id: number) => {
    let newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks = newTasks.map((task: TaskType) => {
      if (task.id === id) return { ...task, status: "todo" };

      return task;
    });

    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        finishTask,
        unFinishTask,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export function useTodoList() {
  const ctx = useContext(TodoListContext);
  if (!ctx) throw new Error("useTodoList deve ser usado dentro de Todo");

  return ctx;
}
