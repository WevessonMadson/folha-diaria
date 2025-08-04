import { createContext, useContext, useEffect, useState } from "react";

export type PriorityTaskType = "Baixa" | "Media" | "Alta";

export type StatusTaskType = "todo" | "done";

export type TaskType = {
  id: number;
  title: string;
  priority: PriorityTaskType;
  date: string /* data para concluir ou data de conclusão */;
  status: StatusTaskType;
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
    let newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks.push({ id: getLastId() + 1, status: "todo", ...newTask });

    newTasks = ordenarTarefasGlobal(newTasks);

    setTasks(newTasks);
  };

  const editTask = (id: number, newTask: NewTaskType) => {
    let newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks = newTasks.map((task: TaskType) => {
      if (task.id === id)
        return { id: task.id, status: task.status, ...newTask };
      return task;
    });

    newTasks = ordenarTarefasGlobal(newTasks);

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
    const completionDate = `${year}-${month}-${day}`;

    newTasks = newTasks.map((task: TaskType) => {
      if (task.id === id)
        return { ...task, status: "done", date: completionDate };

      return task;
    });

    newTasks = ordenarTarefasGlobal(newTasks);

    setTasks(newTasks);
  };

  const unFinishTask = (id: number) => {
    let newTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    newTasks = newTasks.map((task: TaskType) => {
      if (task.id === id) return { ...task, status: "todo" };

      return task;
    });

    newTasks = ordenarTarefasGlobal(newTasks);

    setTasks(newTasks);
  };

  function ordenarTarefasGlobal(tarefas: TaskType[]): TaskType[] {
    const prioridadePeso: Record<PriorityTaskType, number> = {
      Alta: 1,
      Media: 2,
      Baixa: 3,
    };

    return tarefas.slice().sort((a, b) => {
      const timeA = a.date ? new Date(a.date).getTime() : null;
      const timeB = b.date ? new Date(b.date).getTime() : null;

      if (a.status === "todo" && b.status === "todo") {
        // Ordenação para tarefas pendentes
        if (timeA !== timeB) {
          if (timeA === null) return 1;
          if (timeB === null) return -1;
          return timeA - timeB;
        }
        return prioridadePeso[a.priority] - prioridadePeso[b.priority];
      }

      if (a.status === "done" && b.status === "done") {
        // Ordenação para tarefas finalizadas
        if (timeA !== timeB) {
          if (timeA === null) return -1;
          if (timeB === null) return 1;
          return timeB - timeA;
        }
      }

      // Mantém a ordem relativa entre `todo` e `done` (ou opcionalmente agrupar)
      return 0;
    });
  }

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
