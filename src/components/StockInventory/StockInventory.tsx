import { useState, useEffect } from "react";
import axios from "axios";
import { Stocks } from "../../dto/TampilanBarang.dto";

const StockInventoryComponent = () => {
  const [stock, setStock] = useState<Stocks[]>([]);
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/stock");
        setStock(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    fetchStock();
  }, []);

  return {
    stock,
    setStock,
  };
};

export default StockInventoryComponent;
