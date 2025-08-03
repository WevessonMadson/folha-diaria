import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DailySheetProvider } from "./contexts/DailySheetContext";
import { TodoListProvider } from "./contexts/TodoListContext";
import FrontDailySheet from "./pages/FrontDailySheet/FrontDailySheet";
import VerseDailySheet from "./pages/VerseDailySheet/VerseDailySheet";
import TodoPage from "./pages/TodoPage/TodoPage";

import "./App.css";

function App() {
  return (
    <TodoListProvider>
      <DailySheetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontDailySheet />} />
            <Route path="/verse" element={<VerseDailySheet />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </BrowserRouter>
      </DailySheetProvider>
    </TodoListProvider>
  );
}

export default App;
