function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-3xl pb-3">Warehouse management system</p>
        <div className="flex gap-2">
          <button
            className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4"
            onClick={() => (window.location.href = "/penerimaan")}
          >
            Penerimaan barang
          </button>
          <button
            className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4"
            onClick={() => (window.location.href = "/pengeluaran")}
          >
            Pengeluaran barang
          </button>
          <button
            className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4"
            onClick={() => (window.location.href = "/report")}
          >
            Inventory Report
          </button>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
