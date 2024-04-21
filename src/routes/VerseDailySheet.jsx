import { createElement, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../components/Header';
import Learnings from '../components/Learnings';
import Gratitude from '../components/Gratitude';
import Button from '../components/Button';
import Note from '../components/Note';

import { DailySheetContext } from '../App';
 
const VerseDailySheet = () => {
    const { globalState, updateDailySheetState, clearDailySheet } = useContext(DailySheetContext);

    function handleNote(value) {
      updateDailySheetState('dayNote', value);
    }

    function handleLearnings(index, value) {
      const current = globalState;
      current.todayLearnings[index] = value;
      updateDailySheetState('todayLearnings', current.todayLearnings);
    }

    function handleGratitude(index, value) {
      const current = globalState;
      current.todayGratefull[index] = value;
      updateDailySheetState('todayGratefull', current.todayGratefull);
    }

    function finishDailySheet() {
      clearDailySheet();
    }

    return (
      <div className="daily-sheet">
        <Header date={ globalState.date }/>

        <Note 
          note={ globalState.dayNote }
          updateNote={ handleNote } />

        <Learnings 
          learnings={ globalState.todayLearnings } 
          updateLearning={ handleLearnings }/>

        <Gratitude 
          gratitudes={ globalState.todayGratefull }
          updateGratitude={ handleGratitude }/>
        
        <Link 
          to="/"
          onClick={ finishDailySheet }>
          <Button 
            label="Finalizar" />
        </Link>
      </div>
    );
  };
  
  export default VerseDailySheet;