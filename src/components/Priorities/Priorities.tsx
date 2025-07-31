import type { PrioritieType } from "../../data/getDailySheet";
import "./Priorities.css";

type PrioritiesPropsType = {
  priorities: PrioritieType[];
  updatePrioritie: (name: number, value: boolean | string) => void;
};

const Priorities = ({ priorities, updatePrioritie }: PrioritiesPropsType) => {
  const handlePrioritie = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value, checked } = e.target;

    let [type, index] = name.split("-");

    if (type == "done") {
      updatePrioritie(Number(index), checked);
    } else {
      updatePrioritie(Number(index), value);
    }
  };

  const prioritiesItems = () => {
    return priorities.map((priorite, index) => {
      return (
        <div className="prioritie" key={index}>
          <input
            type="checkbox"
            name={`done-${index}`}
            checked={priorite.done}
            onChange={handlePrioritie}
          />
          <input
            type="text"
            className="input-prioritie"
            value={priorite.text}
            name={`text-${index}`}
            onChange={handlePrioritie}
          />
        </div>
      );
    });
  };

  return (
    <div className="card card-two">
      <p className="title-card">Prioridades:</p>
      {prioritiesItems()}
    </div>
  );
};

export default Priorities;
