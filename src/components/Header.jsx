import { useEffect } from 'react';
import './Header.css'
import { useState } from 'react';

const Header = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        let date = new Date();
        let day = date.getDate();

        if (date.getHours() > 19) {
            day += 1;
        }

        setDate(`${day}/${date.getMonth() > 10 ? date.getMonth() : "0" + date.getMonth()}/${date.getFullYear()}`);
    });

    return (
        <div className="header">
            <p>Folha Diária</p>
            <p className='date'>{date}</p>
        </div>
    )
}

export default Header;