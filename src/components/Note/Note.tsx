import "./Note.css";

type NotePropsType = {
  note: string;
  updateNote: (valor: string) => void;
};

const Note = ({ note, updateNote }: NotePropsType) => {
  function handleNote(e: React.ChangeEvent<HTMLInputElement>) {
    updateNote(e.target.value);
  }

  return (
    <div className="card card-one">
      <p className="title-card">Nota:</p>
      <input
        type="text"
        className="input-note"
        value={note}
        onChange={handleNote}
      />
    </div>
  );
};

export default Note;
