import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FrontDailySheet from './routes/FrontDailySheet';
import VerseDailySheet from './routes/VerseDailySheet';
import './App.css'



function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <FrontDailySheet />
      },
      {
        path: "/verse",
        element: <VerseDailySheet />
      }
  ])
  
  return (
      <>
        <RouterProvider router={router} />
      </>
    )
}

export default App;
