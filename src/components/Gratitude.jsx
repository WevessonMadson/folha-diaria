import './Gratitude.css';

const Gratitude = () => {
    const ThanksItem = () => {
        return (
            <div>
                <input type="text" className="input-thank" value="celular demais" />
            </div>
        )
    }
    return (
        <div className="card card-three">
            <p className='title-card'>Grato por:</p>
            <div className="thanks">
                <ThanksItem />
                <ThanksItem />
                <ThanksItem />                
            </div>
        </div>
    )
}

export default Gratitude;