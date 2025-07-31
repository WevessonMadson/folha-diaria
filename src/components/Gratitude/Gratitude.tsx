import "./Gratitude.css";

type GratitudePropsType = {
  gratitudes: string[];
  updateGratitude: (name: number, value: string) => void;
};

const Gratitude = ({ gratitudes, updateGratitude }: GratitudePropsType) => {
  function handleGratitude(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;

    updateGratitude(Number(name), value);
  }

  const ThanksItems = () => {
    return gratitudes.map((gratitude, index) => {
      return (
        <div key={index}>
          <input
            type="text"
            className="input-thank"
            value={gratitude}
            name={String(index)}
            onChange={handleGratitude}
          />
        </div>
      );
    });
  };
  return (
    <div className="card card-three">
      <p className="title-card">Grato por:</p>
      <div className="thanks">{ThanksItems()}</div>
    </div>
  );
};

export default Gratitude;
