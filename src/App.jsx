import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CsvReader from "./components/CsvReader";
import Select from "./components/Select";
import Stats from "./pages/Stats";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  const goToNewPage = () => {
    navigate("/stats");
  };
  return (
    <>
      <header>
        <CsvReader />
      </header>
      <main>
        <h1 className="big-text text-white">RAIL RIVALS</h1>
        <div className="cursor-pointer w-full flex flex-row justify-center" onClick={goToNewPage}>
          <Select />
        </div>
        <div className="elipse-1"></div>
        <div className="elipse-2"></div>
      </main>
    </>
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
