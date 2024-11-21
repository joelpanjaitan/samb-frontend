import { useState, useEffect } from "react";
import axios from "axios";
import {
  Warehouses,
  Suppliers,
  Products,
} from "../../dto/PenerimaanBarang.dto";

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
    // Fetch suppliers and products from the API when component mounts
    const fetchData = async () => {
      axios.get("/api/suppliers").then((res) => setSuppliers(res.data));
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
