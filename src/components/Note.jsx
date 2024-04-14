import './Note.css';

const Note = () => {
    return (
        <div className="card card-one">
            <p className='title-card'>Nota:</p>
            <input type="text" className='input-note' value="10"/>
        </div>
    )
}

export default Note;