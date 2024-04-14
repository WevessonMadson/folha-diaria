import './Priorities.css'

const Priorities = () => {
    const Prioritie = () => {
        return (
            <div className="prioritie">
                <input type="checkbox" />
                <input type="text" className='input-prioritie' value="Correr cedo" />
            </div>
        )
    }

    return (
        <div className="card card-two">
            <p className='title-card'>Prioridades:</p>
            <Prioritie />
            <Prioritie />
            <Prioritie />
            <Prioritie />
            <Prioritie />
        </div>
    )
}

export default Priorities;