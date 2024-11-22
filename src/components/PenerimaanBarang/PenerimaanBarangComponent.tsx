import { Warehouses, Suppliers, Products } from "../../dto/TampilanBarang.dto";
import { useState, useEffect } from "react";
import connect from "../../connectionData";

const PenerimaanBarangComponent = () => {
  const [warehouse, setWarehouse] = useState<Warehouses[]>([]);
  const [suppliers, setSuppliers] = useState<Suppliers[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [trxData, setTrxData] = useState({
    TrxInNo: "",
    TrxInSuppIdf: 1,
    TrxInDProductIdf: 0,
    TrxInDQtyDus: 0,
    TrxInDQtyPcs: 0,
    WhsIdf: 1,
    TrxInDate: "",
    TrxInNotes: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const supplierData = await connect.get("/suppliers");
        setSuppliers(supplierData.data);
      } catch (error) {
        console.error("Error to fetch suppliers:", error);
      }
      try {
        const productData = await connect.get("/products");
        setProducts(productData.data);
      } catch (error) {
        console.error("Error to fetch products:", error);
      }
      try {
        const warehouseData = await connect.get("/warehouses");
        setWarehouse(warehouseData.data);
      } catch (error) {
        console.error("Error to fetch warehouses:", error);
      }
    };
    fetchData();
  }, []);
  const handleChangeInput = (data: any) => {
    var today = new Date().toISOString().split("T")[0];
    const { name, value } = data.target;
    setTrxData((prevData) => ({
      ...prevData,
      [name]: value.replace(/^0+/, ""),
      TrxInDate: `${today}`,
      TrxInNo: `samb-${today}`,
    }));
  };

  const handleSubmit = (input: any) => {
    input.preventDefault();
    connect
      .post("/trx-in", trxData)
      .then((response) => {
        console.log("Barang diterima:", response.data);
        window.alert(`Items inbound success. ` + String(response.data.message));
      })
      .catch((error) => {
        console.error("Error penerimaan barang:", error);
      });
  };

  return {
    handleChangeInput,
    handleSubmit,
    setSuppliers,
    setWarehouse,
    setTrxData,
    setProducts,
    trxData,
    products,
    warehouse,
    suppliers,
  };
};

export default PenerimaanBarangComponent;
