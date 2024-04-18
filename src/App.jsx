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

  useEffect(() => {
    localStorage.setItem("dailySheet", JSON.stringify(globalState));
  }, [globalState])

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      <div className='app'>
        <RouterProvider basename={'folha'} router={router} />
      </div>        
    </AppContext.Provider>
  )
}

export default App;
