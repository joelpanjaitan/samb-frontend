import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
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
          <button className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4">
            Penerimaan barang
          </button>
          <button className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4">
            Pengeluaran barang
          </button>
          <button className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4">
            Inventory Report
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
