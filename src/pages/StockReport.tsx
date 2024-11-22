import StockInventoryComponent from "../components/StockInventory/StockInventory";
function StockReport() {
  const { stock } = StockInventoryComponent();
  return (
    <>
      <div className="bg-[#282c34] h-screen text-[#61dafb] flex justify-center">
        <div className="w-2/4 p-3 flex flex-col">
          <h2 className="mb-3">Stock Report</h2>
          <table>
            <thead>
              <tr>
                <th className="text-left">Gudang</th>
                <th className="text-left">Produk</th>
                <th className="text-left">Qty Dus</th>
                <th className="text-left">Qty Pcs</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((item, index) => (
                <tr key={index}>
                  <td>{item.warehouse}</td>
                  <td>{item.product}</td>
                  <td>{item.qty_dus}</td>
                  <td>{item.qty_pcs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StockReport;
