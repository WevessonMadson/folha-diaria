import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Learnings from "../../components/Learnings/Learnings";
import Gratitude from "../../components/Gratitude/Gratitude";
import Button from "../../components/Button/Button";
import Note from "../../components/Note/Note";
import { useDailySheet } from "../../contexts/DailySheetContext";

const VerseDailySheet = () => {
  const { globalState, updateDailySheetState, clearDailySheet } =
    useDailySheet();

  function handleNote(value: string) {
    updateDailySheetState("dayNote", value);
  }

  function handleLearnings(index: number, value: string) {
    const current = globalState;
    current.todayLearnings[index] = value;
    updateDailySheetState("todayLearnings", current.todayLearnings);
  }

  function handleGratitude(index: number, value: string) {
    const current = globalState;
    current.todayGratefull[index] = value;
    updateDailySheetState("todayGratefull", current.todayGratefull);
  }

  function finishDailySheet() {
    clearDailySheet();
  }

  return (
    <div className="daily-sheet">
      <Header date={globalState.date} />

      <Note note={globalState.dayNote} updateNote={handleNote} />

      <Learnings
        learnings={globalState.todayLearnings}
        updateLearning={handleLearnings}
      />

      <Gratitude
        gratitudes={globalState.todayGratefull}
        updateGratitude={handleGratitude}
      />

      <Link to="/" onClick={finishDailySheet}>
        <Button label="Finalizar" />
      </Link>
    </div>
  );
};

export default VerseDailySheet;
