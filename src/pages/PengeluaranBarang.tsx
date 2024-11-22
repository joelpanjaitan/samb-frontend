import PenerimaanBarangComponent from "../components/PengeluaranBarang/PengeluaranBarangComponent";
function PengeluaranBarang() {
  const {
    handleChangeInput,
    handleSubmit,
    warehouse,
    suppliers,
    products,
    trxData,
  } = PenerimaanBarangComponent();
  return (
    <div className="bg-[#282c34] h-screen text-[#61dafb] flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-2/4 p-3">
        <h2 className="mb-2">Pengeluaran Barang</h2>
        <label>Supplier:</label>
        <select
          name="TrxOutSuppIdf"
          value={trxData.TrxOutSuppIdf}
          onChange={handleChangeInput}
        >
          {suppliers.map((customer) => (
            <option key={customer.SupplierPK} value={customer.SupplierPK}>
              {customer.SupplierName}
            </option>
          ))}
        </select>

        <label>Produk:</label>
        <select
          name="TrxOutDProductId"
          value={trxData.TrxOutDProductId}
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
          name="WhsIdf"
          value={trxData.WhsIdf}
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
          name="TrxInDQtyDus"
          value={trxData.TrxInDQtyDus}
          onChange={handleChangeInput}
        />

        <label>Jumlah Pcs:</label>
        <input
          type="number"
          name="TrxInDQtyPcs"
          value={trxData.TrxInDQtyPcs}
          onChange={handleChangeInput}
        />

        <label>Catatan:</label>
        <input
          type="text"
          name="notes"
          value={trxData.TrxInNotes}
          onChange={handleChangeInput}
        />
        <div className="justify-center flex">
          <button
            type="submit"
            className="border border-t-green-200 w-fit m-6 px-2 rounded-xl"
          >
            Simpan Pengeluaran
          </button>
        </div>
      </form>
    </div>
  );
}
export default PengeluaranBarang;
