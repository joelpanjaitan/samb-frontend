import StockInventoryComponent from "../components/StockInventory/StockInventory";
function StockReport() {
  const { stock } = StockInventoryComponent();
  return (
    <>
      <div>
        <h2>Stock Report</h2>
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
    </>
  );
}

export default StockReport;
