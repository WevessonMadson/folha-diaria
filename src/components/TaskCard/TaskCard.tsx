import ButtonFinish from "../../assets/icons/check_24dp.svg";
import ButtonEdit from "../../assets/icons/edit_24dp.svg";
import ButtonDelete from "../../assets/icons/delete_24dp.svg";
import ButtonUnDo from "../../assets/icons/undo_24dp.svg";

import "./TaskCard.css";

type TaskCardPropsType = {
  title: string;
  date: string;
  priority: string;
  status: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onMarkAsDone?: () => void;
  onMarkAsTodo?: () => void;
};

const TaskCard = ({
  title,
  date,
  priority,
  status,
  onEdit,
  onDelete,
  onMarkAsDone,
  onMarkAsTodo,
}: TaskCardPropsType) => {
  const isDone = status === "done";

  return (
    <div className={`card task-card ${status}`}>
      <div className="task-info">
        <div className={`task-text ${isDone ? "done" : ""}`}>{title}</div>
        {!isDone && priority && (
          <span className="priority-info">
            {"Prioridade: "}
            <span className={`priority ${priority.toLowerCase()}`}>
              {priority}
            </span>
          </span>
        )}
        <span className={`date ${isDone ? "" : "open"}`}>
          {isDone ? `Conclusão: ${date}` : date}
        </span>
      </div>

      <div className="task-actions">
        {isDone ? (
          <button onClick={onMarkAsTodo}>
            <img src={ButtonUnDo} alt="botão desfazer" />
          </button>
        ) : (
          <>
            <button onClick={onMarkAsDone}>
              <img src={ButtonFinish} alt="botão de concluir tarefa" />
            </button>
            <button onClick={onEdit}>
              <img src={ButtonEdit} alt="botão de editar tarefa" />
            </button>
            <button onClick={onDelete}>
              <img src={ButtonDelete} alt="botão de excluir tarefa" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
