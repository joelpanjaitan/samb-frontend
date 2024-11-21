import PenerimaanBarangComponent from "../components/PenerimaanBarang/PenerimaanBarangComponent";
function PenerimaanBarang() {
  const {
    handleChangeInput,
    handleSubmit,
    warehouse,
    suppliers,
    products,
    trxData,
  } = PenerimaanBarangComponent();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Penerimaan Barang</h2>
        <label>Supplier:</label>
        <select
          name="supplierId"
          value={trxData.supplierId}
          onChange={handleChangeInput}
        >
          {suppliers.map((supplier) => (
            <option key={supplier.SupplierPK} value={supplier.SupplierPK}>
              {supplier.SupplierName}
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

        <button type="submit">Simpan Penerimaan</button>
      </form>
    </>
  );
}
export default PenerimaanBarang;
