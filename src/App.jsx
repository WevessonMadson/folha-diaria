import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import FrontDailySheet from './routes/FrontDailySheet';
import VerseDailySheet from './routes/VerseDailySheet';
import getDailySheet from './data/getDailySheet.js';
import getHistorySheets from './data/getHistorySheets.js';
import './App.css'

const inicialState = getDailySheet();

export const DailySheetContext = createContext(inicialState);

const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontDailySheet />,
    },
    {
      path: "/verse",
      element: <VerseDailySheet />,
    }
])

function App() {
  const [globalState, setGlobalState] = useState(inicialState);

  function updateDailySheetState(key, value) {
    setGlobalState({
      ...globalState,
      [key]: value
    })
  }

  function clearDailySheet() {
    const historySheets = getHistorySheets();

    historySheets.push(globalState);

    localStorage.setItem('historySheets', JSON.stringify(historySheets));

    localStorage.removeItem("dailySheet");

    setGlobalState(getDailySheet());
  }

  useEffect(() => {
    localStorage.setItem("dailySheet", JSON.stringify(globalState));
  }, [globalState])

  return (
    <DailySheetContext.Provider value={{ globalState, updateDailySheetState, clearDailySheet }}>
        <RouterProvider router={router} />
    </DailySheetContext.Provider>
  )
}

export default App;
