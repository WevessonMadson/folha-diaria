import './Gratitude.css';

const Gratitude = ({ gratitudes, updateGratitude }) => {
    function handleGratitude(e) {
        let {name, value} = e.target;

        updateGratitude(name, value);
    }

    const ThanksItems = () => {
        return gratitudes.map((gratitude, index) => {
            return (
                <div>
                    <input 
                        type="text" 
                        className="input-thank" 
                        value={ gratitude }
                        name={index}
                        onChange={ handleGratitude }
                    />
                </div>
            )
        })
    }
    return (
        <div className="card card-three">
            <p className='title-card'>Grato por:</p>
            <div className="thanks">
                { ThanksItems() }               
            </div>
        </div>
    )
}

export default Gratitude;