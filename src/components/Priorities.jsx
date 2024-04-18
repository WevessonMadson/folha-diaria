import './Priorities.css'

const Priorities = ({ priorities, updatePriorities }) => {
    const handlePriorities = (values) => {
        //  fazer regra para mudar o valor no estado global 
        //updatePriorities();
    }

    const prioritiesItems = () => {
        return priorities.map((priorite, index) => {
            return (
                <div 
                    className="prioritie" 
                    key={index}
                >
                    <input 
                        type="checkbox" 
                        checked={priorite.done} 
                        onChange={handlePriorities}
                     />
                    <input 
                        type="text" 
                        className='input-prioritie' 
                        value={ priorite.text } 
                        onChange={handlePriorities}
                     />
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