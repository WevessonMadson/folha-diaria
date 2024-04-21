import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Focus from '../components/Focus';
import Priorities from '../components/Priorities';
import Ignore from '../components/Ignore';
import Button from '../components/Button';

import { DailySheetContext } from '../App';
 
const FrontDailySheet = () => {
  const { globalState, updateDailySheetState } = useContext(DailySheetContext);

  function handleFocus(focusinputText) {    
    updateDailySheetState('focus', focusinputText);
  }

  function handlePrioritie(index, key, value) {    
    const current = globalState;
    
    current.priorities[index][key] = value;
    
    updateDailySheetState('priorities', current.priorities);
  }  
  
  function handleIgnore(index, value) {    
    const current = globalState;
    
    current.ignories[index] = value;
    
    updateDailySheetState('ignories', current.ignories);
  }
  

    return (
      <div className="daily-sheet">
        <Header date={globalState.date} />

        <Focus 
          focusText={globalState.focus} 
          updateFocus={handleFocus} />

        <Priorities 
          priorities={ globalState.priorities } 
          updatePrioritie={handlePrioritie} />

        <Ignore 
          ignories={globalState.ignories} 
          updateIgnore={handleIgnore} />

        <Link to="/verse">
          <Button label="Avaliar dia"/>
        </Link>
      </div>
    );
  };
  
  export default FrontDailySheet;