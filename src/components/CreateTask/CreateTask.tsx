import { useEffect, useState } from "react";

import "./CreateTask.css";
import {
  useTodoList,
  type NewTaskType,
  type TaskType,
} from "../../contexts/TodoListContext";

type CreateTaskPropsType = {
  editingTask?: TaskType;
  onClose: () => void;
};

const CreateTask = ({ editingTask, onClose }: CreateTaskPropsType) => {
  const { addTask, editTask } = useTodoList();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"Baixa" | "Media" | "Alta">("Baixa");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setPriority(editingTask.priority);
      setDate(editingTask.date);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: NewTaskType = {
      title,
      priority,
      date,
    };

    if (editingTask) {
      editTask(editingTask.id, newTask);
    } else {
      addTask(newTask);
    }

    onClose();
  };

  return (
    <div className="create-task-container">
      <h2 className="header">Tarefa</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <label className="form-label form-block">
          Descrição:
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-description"
          />
        </label>

        <div className="form-block">
          <label htmlFor="date">
            Data:
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>

        <div className="form-block">
          <span>Prioridade:</span>
          <div className="priority-options">
            <label>
              <input
                type="radio"
                name="priority"
                value="Baixa"
                checked={priority === "Baixa"}
                onChange={() => setPriority("Baixa")}
              />
              Baixa
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Media"
                checked={priority === "Media"}
                onChange={() => setPriority("Media")}
              />
              Média
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Alta"
                checked={priority === "Alta"}
                onChange={() => setPriority("Alta")}
              />
              Alta
            </label>
          </div>
        </div>
        <div className="buttons-task-edit">
          <button type="submit" className="button">
            Salvar
          </button>
          <button className="button button-cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
