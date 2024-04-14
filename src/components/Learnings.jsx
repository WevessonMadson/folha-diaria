import './Learnings.css'

const Learnings = () => {
    const LeearnItem = () => {
        return (
            <div>
                <input type="text" className="input-learn" value="dividir" />
            </div>
        )
    }
    return (
        <div className="card card-two">
            <p className='title-card'>Aprendizados:</p>
            <div className="learnings">
                <LeearnItem />
                <LeearnItem />
                <LeearnItem />
                <LeearnItem />
                <LeearnItem />                
            </div>
        </div>
    )
}

export default Learnings;