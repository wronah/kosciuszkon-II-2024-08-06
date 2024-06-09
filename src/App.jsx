import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CsvReader from "./components/CsvReader";
import Stats from "./pages/Stats";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  const goToNewPage = () => {
    navigate("/stats");
  };

  return (
    <div className="App">
      <h1 className="big-text">RAIL RIVALS</h1>
      <CsvReader />
      <div className="elipse-1"></div>
      <div className="elipse-2"></div>
      <button onClick={goToNewPage} className="btn">
        Go to Customer Page
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
