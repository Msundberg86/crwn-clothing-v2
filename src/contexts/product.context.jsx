import { createContext, useState } from "react";
import SHOP_DATA from "../assets/shop_data.js";

//Actual value you want to access.
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products] = useState([]);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
