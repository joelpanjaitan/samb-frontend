function StockReport() {
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
                <td>{item.warehouse}</td>
                <td>{item.productName}</td>
                <td>{item.qtyDus}</td>
                <td>{item.qtyPcs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StockReport;
