import { useState, useEffect } from "react";
import axios from "axios";
import { Warehouses, Customers, Products } from "../../dto/TampilanBarang.dto";

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
      axios.get("/api/customers").then((res) => setCustomers(res.data));
      axios.get("/api/products").then((res) => setProducts(res.data));
      axios.get("/api/warehouses").then((res) => setWarehouse(res.data));
    };
    fetchData();
  }, []);
  const handleChangeInput = (data: any) => {
    const { name, value } = data.target;
    setTrxData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (input: any) => {
    input.preventDefault();
    axios
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
