import Leagues from "./components/Leagues";
import "./App.css";
import LeagueDetails from "./components/LeagueDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
