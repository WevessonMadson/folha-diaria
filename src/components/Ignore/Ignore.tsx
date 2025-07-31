import "./Ignore.css";

type IgnorePropsType = {
  ignories: string[];
  updateIgnore: (name: number, value: string) => void;
};

const Ignore = ({ ignories, updateIgnore }: IgnorePropsType) => {
  const IgnoreItems = () => {
    const handleIgnore = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      updateIgnore(Number(name), value);
    };

    return ignories.map((ignoreText, index) => {
      return (
        <div key={index}>
          <input
            type="text"
            className="input-ignore"
            value={ignoreText}
            name={String(index)}
            onChange={handleIgnore}
          />
        </div>
      );
    });
  };

  return (
    <div className="card card-three">
      <p className="title-card">Evitar:</p>
      <div className="ignories">{IgnoreItems()}</div>
    </div>
  );
};

export default Ignore;
