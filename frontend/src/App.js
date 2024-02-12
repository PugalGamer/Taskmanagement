import "./App.css";
import ViewPage from "./component/ViewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardView from "./component/BoardView";
import ListView from "./component/ListView";
import CalendarView from "./component/CalendarView";
import Login from "./Log/Login";
import Register from "./Log/Register";
import Dash2 from "./Dash/Dash2";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            // element={<ViewPage view={<ListView />} index={1} />}
            element={<Login />}
          />

          <Route
            path="/ListView"
            element={<ViewPage view={<ListView />} index={1} />}
          />
          <Route
            path="/Board"
            element={<ViewPage index={3} view={<BoardView />} />}
          />
          <Route
            path="/Calendar"
            element={<ViewPage index={2} view={<CalendarView />} />}
          />
          <Route
            path="/dash"
            // element={<Dash2 />}
            element={<ViewPage view={<Dash2 />} index={4} />}

            // element={<ViewPage view={<ListView />} index={1} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
