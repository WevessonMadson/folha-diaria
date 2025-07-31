import "./Learnings.css";

type LearningsPropsType = {
  learnings: string[];
  updateLearning: (name: number, value: string) => void;
};

const Learnings = ({ learnings, updateLearning }: LearningsPropsType) => {
  function handleLearning(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;
    updateLearning(Number(name), value);
  }

  const LearnItems = () => {
    return learnings.map((learning, index) => {
      return (
        <div key={index}>
          <input
            type="text"
            className="input-learn"
            value={learning}
            name={String(index)}
            onChange={handleLearning}
          />
        </div>
      );
    });
  };
  return (
    <div className="card card-two">
      <p className="title-card">Aprendizados:</p>
      <div className="learnings">{LearnItems()}</div>
    </div>
  );
};

export default Learnings;
