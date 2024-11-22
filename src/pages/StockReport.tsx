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
                <th>Gudang</th>
                <th>Produk</th>
                <th>Qty Dus</th>
                <th>Qty Pcs</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((item, index) => (
                <tr key={index}>
                  <td>{item.WarehouseName}</td>
                  <td>{item.ProductName}</td>
                  <td>{item.QtyDus}</td>
                  <td>{item.QtyPcs}</td>
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
