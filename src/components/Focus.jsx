import { useState } from 'react';
import './Focus.css'

const Focus = ({ focusText, updateFocus }) => {
    const handleFocus = (e) => {
        updateFocus(e.target.value);
    }

    return (
        <div className="card card-one">
            <p className='title-card'>Foco:</p>
            <input type="text" 
            className='input-focus' 
            value={ focusText }
            onChange={ handleFocus }
            />
        </div>
    )
}

export default Focus;