import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Focus from "../../components/Focus/Focus";
import Priorities from "../../components/Priorities/Priorities";
import Ignore from "../../components/Ignore/Ignore";
import Button from "../../components/Button/Button";
import { useDailySheet } from "../../contexts/DailySheetContext";

const FrontDailySheet = () => {
  const { globalState, updateDailySheetState } = useDailySheet();

  function handleFocus(focusinputText: string) {
    updateDailySheetState("focus", focusinputText);
  }

  function handlePrioritie(index: number, value: string | boolean) {
    const current = globalState;

    if (typeof value === "string") {
      current.priorities[index].text = value;
    } else {
      current.priorities[index].done = value;
    }

    updateDailySheetState("priorities", current.priorities);
  }

  function handleIgnore(index: number, value: string) {
    const current = globalState;

    current.ignories[index] = value;

    updateDailySheetState("ignories", current.ignories);
  }

  return (
    <div className="daily-sheet">
      <Header date={globalState.date} />

      <Focus focusText={globalState.focus} updateFocus={handleFocus} />

      <Priorities
        priorities={globalState.priorities}
        updatePrioritie={handlePrioritie}
      />

      <Ignore ignories={globalState.ignories} updateIgnore={handleIgnore} />

      <Link to="/verse">
        <Button label="Avaliar dia" />
      </Link>
    </div>
  );
};

export default FrontDailySheet;
