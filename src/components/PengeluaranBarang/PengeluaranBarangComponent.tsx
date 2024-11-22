import { Warehouses, Customers, Products } from "../../dto/TampilanBarang.dto";
import { useState, useEffect } from "react";
import connect from "../../connectionData";

const PengeluaranBarangComponent = () => {
  const [customers, setCustomers] = useState<Customers[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [warehouse, setWarehouse] = useState<Warehouses[]>([]);
  const [trxData, setTrxData] = useState({
    trxNo: "",
    customerId: "",
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
        const customerData = await connect.get("/customers");
        setCustomers(customerData.data);
      } catch (error) {
        console.error("Error to fetch customers:", error);
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
    setCustomers,
    setWarehouse,
    setTrxData,
    setProducts,
    trxData,
    products,
    warehouse,
    customers,
  };
};

export default PengeluaranBarangComponent;
