import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { DailySheetProvider } from "./contexts/DailySheetContext";
import FrontDailySheet from "./pages/FrontDailySheet/FrontDailySheet";
import VerseDailySheet from "./pages/VerseDailySheet/VerseDailySheet";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <DailySheetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontDailySheet />} />
          <Route path="/verse" element={<VerseDailySheet />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </DailySheetProvider>
  );
}

export default App;
