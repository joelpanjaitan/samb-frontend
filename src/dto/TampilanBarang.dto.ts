export interface Suppliers {
  SupplierPK: number;
  SupplierName: string;
}

export interface Products {
  ProductPK: number;
  ProductName: string;
}

export interface Warehouses {
  WhsPK: number;
  WhsName: string;
}

export interface Customers {
  CustomerPK: number;
  CustomerName: string;
}

export interface Stocks {
  WarehouseName: string;
  ProductName: string;
  QtyDus: number;
  QtyPcs: number;
}
