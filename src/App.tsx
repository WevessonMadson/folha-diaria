import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DailySheetProvider } from "./contexts/DailySheetContext";
import { TodoListProvider } from "./contexts/TodoListContext";
import FrontDailySheet from "./pages/FrontDailySheet/FrontDailySheet";
import VerseDailySheet from "./pages/VerseDailySheet/VerseDailySheet";
import TodoPage from "./pages/TodoPage/TodoPage";

import "./App.css";
import Layout from "./components/Layout/Layout";
import { MenuProvider } from "./contexts/MenuContext";

function App() {
  return (
    <MenuProvider>
      <TodoListProvider>
        <DailySheetProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<FrontDailySheet />} />
                <Route path="/verse" element={<VerseDailySheet />} />
                <Route path="/todo" element={<TodoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DailySheetProvider>
      </TodoListProvider>
    </MenuProvider>
  );
}

export default App;
