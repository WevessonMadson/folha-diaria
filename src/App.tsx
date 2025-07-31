import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { DailySheetProvider } from "./contexts/DailySheetContext";
import FrontDailySheet from "./pages/FrontDailySheet/FrontDailySheet";
import VerseDailySheet from "./pages/VerseDailySheet/VerseDailySheet";

function App() {
  return (
    <DailySheetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontDailySheet />} />
          <Route path="/verse" element={<VerseDailySheet />} />
        </Routes>
      </BrowserRouter>
    </DailySheetProvider>
  );
}

export default App;
