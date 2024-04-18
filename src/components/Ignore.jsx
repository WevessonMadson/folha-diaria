import './Ignore.css'

const Ignore = ({ ignories }) => {
    const IgnoreItems = () => {
        return ignories.map(ignoreText => {
            return (
                <div>
                    <input type="text" className="input-ignore" value={ ignoreText } />
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