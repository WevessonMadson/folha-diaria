import './Note.css';

const Note = ({ note, updateNote }) => {
    function handleNote(e) {
        updateNote(e.target.value);
    }

    return (
        <div className="card card-one">
            <p className='title-card'>Nota:</p>
            <input 
                type="text" 
                className='input-note' 
                value={ note }
                onChange={ handleNote }
            />
        </div>
    )
}

export default Note;