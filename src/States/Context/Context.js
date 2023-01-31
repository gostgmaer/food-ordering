import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

// @ts-ignore
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [keyword, setkeyword] = useState("");
  const [productID, setproductID] = useState(null);
  const [loading, setloading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [modal, setModal] = useState(false);

  const cartPanelHandle = () => {
    setOpenCart(!openCart);
  };
  const modalhandler = () => {
    setModal(!modal);
  };

  const calculateDiscount = (original, sale) => {
    let onePercent = original / 100;
    let diff = original - sale;

    return (diff / onePercent).toFixed(1);
  };

  const TaxCalculate = (base, rate) => {
    // console.log((base/100)*rate);
    return (base / 100) * rate;
  };
  const totalSum = (val1, val2) => {
    return Number(val1) + Number(val2);
  };

  const totalprice = (data) => {
    let total = 0;
    data.forEach((element) => {
      total += element.quantity * element.price;
    });
    return total.toFixed(2);
  };
  return (
    <AppContext.Provider
      value={{
        openCart,
        setkeyword,
        totalprice,
        calculateDiscount,
        setproductID,
        TaxCalculate,
        singleProduct,
        setSingleProduct,
        products,modalhandler,modal,
        productID,
        totalSum,
        setloading,
        loading,
        discount,
        setDiscount,
        cartPanelHandle,
        quantity,
        setQuantity,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
