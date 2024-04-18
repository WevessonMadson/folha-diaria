import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import FrontDailySheet from './routes/FrontDailySheet';
import VerseDailySheet from './routes/VerseDailySheet';
import getDailySheet from './data/getDailySheet.js';
import './App.css'

const inicialState = getDailySheet();

export const AppContext = createContext(inicialState);

const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontDailySheet />
    },
    {
      path: "verse",
      element: <VerseDailySheet />
    }
])

function App() {
  const [globalState, setGlobalState] = useState(inicialState);

  function updateGlobalState(key, value) {
    setGlobalState({
      ...globalState,
      [key]: value
    })
  }

  useEffect(() => {
    localStorage.setItem("dailySheet", JSON.stringify(globalState));
  }, [globalState])

  return (
    <AppContext.Provider value={{ globalState, updateGlobalState }}>
        <RouterProvider basename={'folha'} router={router} />
    </AppContext.Provider>
  )
}

export default App;
