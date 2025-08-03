import { useState } from "react";

import TaskCard from "../../components/TaskCard/TaskCard";
import ButtonAdd from "../../assets/icons/add_task.svg";

import "./TodoPage.css";
import { useTodoList } from "../../contexts/TodoListContext";

const TodoPage = () => {
  const { tasks } = useTodoList();
  const [selected, setSelected] = useState("todo");

  return (
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
        {tasks.map((task) => {
          if (task.status === selected) {
            return (
              <TaskCard
                title={task.title}
                priority={task.priority}
                date={task.date}
                status={task.status}
                onEdit={() => console.log("Editar")}
                onDelete={() => console.log("Excluir")}
                onMarkAsDone={() => console.log("Marcar como feito")}
                onMarkAsTodo={() => console.log("Marcar como desfeito")}
              />
            );
          }
        })}
      </div>
      <button className="button button-add-task">
        <img src={ButtonAdd} alt="Botão para adicionar tarefa" />
      </button>
    </div>
  );
};

export default TodoPage;
