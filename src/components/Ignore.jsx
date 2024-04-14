import './Ignore.css'

const Ignore = () => {
    const IgnoreItem = () => {
        return (
            <div>
                <input type="text" className="input-ignore" value="celular demais" />
            </div>
        )
    }

    return (
        <div className="card card-three">
            <p className='title-card'>Evitar:</p>
            <div className="ignories">
                <IgnoreItem />
                <IgnoreItem />
                <IgnoreItem />                
            </div>
        </div>
    )
}

export default Ignore;