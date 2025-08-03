import { useLocation, useNavigate } from "react-router-dom";

import PriorityIcon from "../../assets/icons/priority_24dp.svg";
import TasksIcon from "../../assets/icons/list_alt_24dp.svg";

import "./MenuApp.css";

type MenuProps = {
  onClose: () => void;
};

export default function MenuApp({ onClose }: MenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  function goToPage(path: string) {
    onClose();

    if (path === location.pathname) return;

    navigate(path);
  }

  return (
    <>
      <div id="optionsMenu">
        <div className="fade" onClick={onClose} />
        <div id="actionList">
          <ul id="menu-list">
            <li className="li-menu-item button" onClick={() => goToPage("/")}>
              <img src={PriorityIcon} />
              <span className="descr-list">Prioridades</span>
            </li>
            <li
              className="li-menu-item button"
              onClick={() => goToPage("/todo")}
            >
              <img src={TasksIcon} />
              <span className="descr-list">Lista de tarefas</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
