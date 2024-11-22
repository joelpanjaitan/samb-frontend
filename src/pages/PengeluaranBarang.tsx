import PenerimaanBarangComponent from "../components/PengeluaranBarang/PengeluaranBarangComponent";
function PengeluaranBarang() {
  const {
    handleChangeInput,
    handleSubmit,
    warehouse,
    customers,
    products,
    trxData,
  } = PenerimaanBarangComponent();
  return (
    <div className="bg-[#282c34] h-screen text-[#61dafb] flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-2/4 p-3">
        <h2>Pengeluaran Barang</h2>
        <label>Customer:</label>
        <select
          name="customerId"
          value={trxData.customerId}
          onChange={handleChangeInput}
        >
          {customers.map((customer) => (
            <option key={customer.CustomerPK} value={customer.CustomerPK}>
              {customer.CustomerName}
            </option>
          ))}
        </select>

        <label>Produk:</label>
        <select
          name="productId"
          value={trxData.productId}
          onChange={handleChangeInput}
        >
          {products.map((product) => (
            <option key={product.ProductPK} value={product.ProductPK}>
              {product.ProductName}
            </option>
          ))}
        </select>

        <label>Gudang:</label>
        <select
          name="warehouseId"
          value={trxData.warehouseId}
          onChange={handleChangeInput}
        >
          {warehouse.map((wh) => (
            <option key={wh.WhsPK} value={wh.WhsPK}>
              {wh.WhsName}
            </option>
          ))}
        </select>

        <label>Jumlah Dus:</label>
        <input
          type="number"
          name="qtyDus"
          value={trxData.qtyDus}
          onChange={handleChangeInput}
        />

        <label>Jumlah Pcs:</label>
        <input
          type="number"
          name="qtyPcs"
          value={trxData.qtyPcs}
          onChange={handleChangeInput}
        />

        <label>Catatan:</label>
        <input
          type="text"
          name="notes"
          value={trxData.notes}
          onChange={handleChangeInput}
        />

        <button type="submit">Simpan Pengeluaran</button>
      </form>
    </div>
  );
}
export default PengeluaranBarang;
