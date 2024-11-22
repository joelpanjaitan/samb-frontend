import { useState, useEffect } from "react";
import axios from "axios";
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
        const supplierData = await axios.get(
          "https://samb-backend-production.up.railway.app/suppliers"
        );
        setSuppliers(supplierData.data);
      } catch (error) {
        console.error("Error to fetch suppliers:", error);
      }
      try {
        const productData = await axios.get(
          "https://samb-backend-production.up.railway.app/products"
        );
        setProducts(productData.data);
      } catch (error) {
        console.error("Error to fetch products:", error);
      }
      try {
        const warehouseData = await axios.get(
          "https://samb-backend-production.up.railway.app/warehouses"
        );
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
