import { useState, useEffect } from "react";
import connect from "../../connectionData";
import { Warehouses, Suppliers, Products } from "../../dto/TampilanBarang.dto";

const PenerimaanBarangComponent = () => {
  const [warehouse, setWarehouse] = useState<Warehouses[]>([]);
  const [suppliers, setSuppliers] = useState<Suppliers[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [trxData, setTrxData] = useState({
    trxNo: "",
    supplierId: "",
    productId: "",
    qtyDus: 0,
    qtyPcs: 0,
    warehouseId: "",
    trxDate: "",
    notes: "",
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
    const { name, value } = data.target;
    setTrxData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (input: any) => {
    input.preventDefault();
    connect
      .post("/api/penerimaan", trxData)
      .then((response) => {
        console.log("Barang diterima:", response.data);
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
