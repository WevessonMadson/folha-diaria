import './Ignore.css'

const Ignore = ({ ignories, updateIgnore }) => {
    const IgnoreItems = () => {

        const handleIgnore = (e) => {
            updateIgnore(e.target.name, e.target.value);
        }

        return ignories.map((ignoreText, index) => {
            return (
                <div 
                    key={index}
                >
                    <input 
                    type="text" 
                    className="input-ignore" 
                    value={ ignoreText }
                    name={index}
                    onChange={ handleIgnore }
                    />
                </div>
            )
        })
    }

    return (
        <div className="card card-three">
            <p className='title-card'>Evitar:</p>
            <div className="ignories">
                { IgnoreItems() }              
            </div>
        </div>
    )
}

export default Ignore;