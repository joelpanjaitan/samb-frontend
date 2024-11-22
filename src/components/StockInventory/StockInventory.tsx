import { useState, useEffect } from "react";
import connect from "../../connectionData";
import { Stocks } from "../../dto/TampilanBarang.dto";

const StockInventoryComponent = () => {
  const [stock, setStock] = useState<Stocks[]>([]);
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await connect.get("/stock");
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
