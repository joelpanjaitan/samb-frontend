import { Warehouses, Suppliers, Products } from "../../dto/TampilanBarang.dto";
import { useState, useEffect } from "react";
import connect from "../../connectionData";

const PengeluaranBarangComponent = () => {
  const [suppliers, setCustomers] = useState<Suppliers[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [warehouse, setWarehouse] = useState<Warehouses[]>([]);
  const [trxData, setTrxData] = useState({
    TrxOutNo: "",
    TrxOutSuppIdf: "",
    TrxOutDProductId: "",
    TrxInDQtyDus: 0,
    TrxInDQtyPcs: 0,
    WhsIdf: "",
    TrxInDate: "",
    TrxInNotes: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerData = await connect.get("/suppliers");
        setCustomers(customerData.data);
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
    const { name, value } = data.target;
    var today = new Date().toISOString().split("T")[0];
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
      .post("/trx-out", trxData)
      .then((response) => {
        console.log("Items released:", response.data);
        window.alert("Items Outbound Success.");
      })
      .catch((error) => {
        console.error("Error penerimaan barang:", error);
      });
  };

  return {
    handleChangeInput,
    handleSubmit,
    setCustomers,
    setWarehouse,
    setTrxData,
    setProducts,
    trxData,
    products,
    warehouse,
    suppliers,
  };
};

export default PengeluaranBarangComponent;
