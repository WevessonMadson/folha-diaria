import "./Focus.css";

type FocusPropsType = {
  focusText: string;
  updateFocus: (value: string) => void;
};

const Focus = ({ focusText, updateFocus }: FocusPropsType) => {
  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFocus(e.target.value);
  };

  return (
    <div className="card card-one">
      <p className="title-card">Foco:</p>
      <input
        type="text"
        className="input-focus"
        value={focusText}
        onChange={handleFocus}
      />
    </div>
  );
};

export default Focus;
