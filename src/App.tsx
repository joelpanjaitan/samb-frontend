import React from "react";
import HomePage from "./pages/HomePage";
import PenerimaanBarang from "./pages/PenerimaanBarang";
import PengeluaranBarang from "./pages/PengeluaranBarang";
import StockReport from "./pages/StockReport";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/penerimaan" element={<PenerimaanBarang />} />
        <Route path="/pengeluaran" element={<PengeluaranBarang />} />
        <Route path="/report" element={<StockReport />} />
      </Routes>
    </Router>
  );
}

export default App;
