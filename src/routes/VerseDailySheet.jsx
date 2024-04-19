import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../components/Header';
import Learnings from '../components/Learnings';
import Gratitude from '../components/Gratitude';
import Button from '../components/Button';
import Note from '../components/Note';

import { AppContext } from '../App';
 
const VerseDailySheet = () => {
    const { globalState, updateGlobalState } = useContext(AppContext);

    function handleNote(value) {
      updateGlobalState('dayNote', value);
    }

    return (
      <div className="daily-sheet">
        <Header date={ globalState.date }/>

        <Note 
          note={ globalState.dayNote }
          updateNote={ handleNote } />

        <Learnings />

        <Gratitude />
        
        <Link to="/">
          <Button label="Finalizar"/>
        </Link>
      </div>
    );
  };
  
  export default VerseDailySheet;