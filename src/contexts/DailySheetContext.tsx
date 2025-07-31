import { createContext, useContext, useEffect, useState } from "react";
import type { DailySheetType, PrioritieType } from "../data/getDailySheet";
import getDailySheet from "../data/getDailySheet";
import getHistorySheets from "../data/getHistorySheets";

type DailySheetContextType = {
  globalState: DailySheetType;
  updateDailySheetState: (
    key: string,
    value: string | boolean | PrioritieType[] | string[]
  ) => void;
  clearDailySheet: () => void;
};

const inicialState: DailySheetType = getDailySheet();

const DailySheetContext = createContext<DailySheetContextType | undefined>(
  undefined
);

export const DailySheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [globalState, setGlobalState] = useState(inicialState);

  function updateDailySheetState(
    key: string,
    value: string | boolean | PrioritieType[] | string[]
  ) {
    setGlobalState({
      ...globalState,
      [key]: value,
    });
  }

  function clearDailySheet() {
    const historySheets = getHistorySheets();

    historySheets.push(globalState);

    localStorage.setItem("historySheets", JSON.stringify(historySheets));

    localStorage.removeItem("dailySheet");

    setGlobalState(getDailySheet());
  }

  useEffect(() => {
    localStorage.setItem("dailySheet", JSON.stringify(globalState));
  }, [globalState]);

  return (
    <DailySheetContext.Provider
      value={{
        globalState,
        updateDailySheetState,
        clearDailySheet,
      }}
    >
      {children}
    </DailySheetContext.Provider>
  );
};

export function useDailySheet() {
  const ctx = useContext(DailySheetContext);
  if (!ctx) throw new Error("useLists deve ser usado dentro de Lists");

  return ctx;
}
