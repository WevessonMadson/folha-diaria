import './Learnings.css'

const Learnings = ({ learnings, updateLearning }) => {
    function handleLearning(e) {
        let { name, value } = e.target;
        updateLearning(name, value);
    }

    const LearnItems = () => {
        return learnings.map((learning, index) => {
            return (
                <div key={index}>
                    <input 
                        type="text" 
                        className="input-learn" 
                        value={ learning }
                        name={index}
                        onChange={ handleLearning }
                    />
                </div>
            )
        })
    }
    return (
        <div className="card card-two">
            <p className='title-card'>Aprendizados:</p>
            <div className="learnings">
                { LearnItems() }                
            </div>
        </div>
    )
}

export default Learnings;