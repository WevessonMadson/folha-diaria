import './Priorities.css'

const Priorities = ({ priorities }) => {
    const prioritiesItems = () => {
        return priorities.map(priorite => {
            return (
                <div className="prioritie">
                    <input type="checkbox" checked={priorite.done} />
                    <input type="text" className='input-prioritie' value={ priorite.text } />
                </div>
            )
        })
    }

    return (
        <div className="card card-two">
            <p className='title-card'>Prioridades:</p>
            { prioritiesItems() }
        </div>
    )
}

export default Priorities;