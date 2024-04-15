import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FrontDailySheet from './routes/FrontDailySheet';
import VerseDailySheet from './routes/VerseDailySheet';
import './App.css'


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
    return (
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    )
}

export default App;
