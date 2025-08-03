import { createContext, useContext, useEffect, useState } from "react";

type TaskType = {
  id: number;
  title: string;
  priority: "Baixa" | "Media" | "Alta";
  date: string /* data para concluir ou data de conclusão */;
  status: "todo" | "done";
};

type TodoListContextType = {
  tasks: TaskType[];
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

  //   function updateDailySheetState(
  //     key: string,
  //     value: string | boolean | PrioritieType[] | string[]
  //   ) {
  //     setGlobalState({
  //       ...globalState,
  //       [key]: value,
  //     });
  //   }

  //   function clearDailySheet() {
  //     const historySheets = getHistorySheets();

  //     historySheets.push(globalState);

  //     localStorage.setItem("historySheets", JSON.stringify(historySheets));

  //     localStorage.removeItem("dailySheet");

  //     setGlobalState(getDailySheet());
  //   }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoListContext.Provider
      value={{
        tasks,
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
