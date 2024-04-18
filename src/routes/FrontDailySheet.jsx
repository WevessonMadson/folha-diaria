import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Focus from '../components/Focus';
import Priorities from '../components/Priorities';
import Ignore from '../components/Ignore';
import Button from '../components/Button';

import { AppContext } from '../App';
 
const FrontDailySheet = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  function handleFocus(focusinputText) {    
    updateGlobalState('focus', focusinputText);
  }

  function handlePriorities(prioritiesList) {    
    updateGlobalState('priorities', prioritiesList);
  }
  
  function handleIgnore(index, value) {    
    const current = globalState;
    
    current.ignories[index] = value;
    
    updateGlobalState('ignories', current.ignories);
  }

    return (
      <div className="app">
        <Header date={globalState.date} />
        <Focus focusText={globalState.focus} updateFocus={handleFocus} />
        <Priorities priorities={ globalState.priorities } updatePriorities={handlePriorities} />
        <Ignore ignories={globalState.ignories} updateIgnore={handleIgnore} />
        <Link to="/verse">
          <Button label="Avaliar dia"/>
        </Link>
      </div>
    );
  };
  
  export default FrontDailySheet;