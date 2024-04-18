import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Focus from '../components/Focus';
import Priorities from '../components/Priorities';
import Ignore from '../components/Ignore';
import Button from '../components/Button';

import { AppContext } from '../App';
 
const FrontDailySheet = () => {
  const { globalState, setGlobalState } = useContext(AppContext);

  function handleFocus(focusinputText) {    
    setGlobalState({
      ...globalState,
      focus: focusinputText
    })
  }

    return (
      <div className="app">
        <Header date={globalState.date} />
        <Focus focusText={globalState.focus} updateFocus={handleFocus} />
        <Priorities priorities={ globalState.priorities } />
        <Ignore ignories={globalState.ignories} />
        <Link to="/verse">
          <Button label="Avaliar dia"/>
        </Link>
      </div>
    );
  };
  
  export default FrontDailySheet;