import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useContext } from "react";
import Home from "./components/Loogged/Home";
import Settings from "./components/Loogged/Settings";
import Planner from "./components/Loogged/Planner";
import Reminders from "./components/Loogged/Reminders";
import Page404 from "./components/Utility/Page404";
import Login from "./components/Login/Login";
import Tips from "./components/Loogged/Tips";
import Register from "./components/Login/Register";
import AuthContext from "./components/Context/AuthContext";
import Expenses from "./components/Loogged/Expenses";
import Meters from "./components/Loogged/Meters";
import Authors from "./components/Loogged/Authors";
axios.defaults.withCredentials = true;

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {isAuthenticated && (
        <NavLink to="/" className="nav">
          <img src="/assets/powrot.svg" alt="Strzalka" />
        </NavLink>
      )}
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/register"
          element={isAuthenticated ? <Home /> : <Register />}
        />
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/settings"
          element={isAuthenticated ? <Settings /> : <Login />}
        />
        <Route
          path="/todo"
          element={isAuthenticated ? <Planner /> : <Login />}
        />
        <Route
          path="/reminders"
          element={isAuthenticated ? <Reminders /> : <Login />}
        />
        <Route
          path="/expenses"
          element={isAuthenticated ? <Expenses /> : <Login />}
        />
        <Route
          path="/meters"
          element={isAuthenticated ? <Meters /> : <Login />}
        />
        <Route
          path="/authors"
          element={isAuthenticated ? <Authors /> : <Login />}
        />
        <Route path="/tips" element={isAuthenticated ? <Tips /> : <Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
