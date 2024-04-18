import { useEffect } from 'react';
import './Header.css'
import { useState } from 'react';

const Header = ({ date }) => {      
      return (
          <div className="header">
            <p>Folha Diária</p>
            <p className='date'>{ date }</p>
        </div>
    )
}

export default Header;