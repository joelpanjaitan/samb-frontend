import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const Navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-3xl pb-3">Warehouse management system</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="flex gap-2">
          <button
            className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4"
            onClick={() => Navigate("/penerimaan")}
          >
            Penerimaan barang
          </button>
          <button
            className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4"
            onClick={() => Navigate("/pengeluaran")}
          >
            Pengeluaran barang
          </button>
          <button
            className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4"
            onClick={() => Navigate("/report")}
          >
            Inventory Report
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
