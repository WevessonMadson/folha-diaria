import './Priorities.css'

const Priorities = ({ priorities, updatePrioritie }) => {
    const handlePrioritie = (e) => {
        console.log(e.target)
        let { name, value, checked } = e.target;

        let [ type, index ] = name.split('-');
        
        if (type == 'done') value = checked;
        
        updatePrioritie(index, type, value);
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
                        name={`done-${index}`}
                        checked={ priorite.done }
                        onChange={ handlePrioritie }
                     />
                    <input 
                        type="text" 
                        className='input-prioritie' 
                        value={ priorite.text } 
                        name={`text-${index}`}
                        onChange={handlePrioritie}
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