import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"/logo-samb.jpeg"}
          className="App-logo p-10"
          alt="logo_samb"
        />
        <p className="text-3xl pb-3">Warehouse management system</p>
        <div className="flex gap-2">
          <Link to={"/penerimaan"}>
            <button className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4">
              Penerimaan barang
            </button>
          </Link>
          <Link to={"/pengeluaran"}>
            <button className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4">
              Pengeluaran barang
            </button>
          </Link>
          <Link to={"/report"}>
            <button className="text-base App-link bg-transparent border border-green-200 rounded-2xl px-4">
              Inventory Report
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
