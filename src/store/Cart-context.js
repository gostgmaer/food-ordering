import React, { useContext } from "react";

const CartContext = React.createContext({
    item: [],
    totalAmount: 0,
    addItem : item => { }, removeItem :id => { }

});

export default CartContext;

export const useCartContext = () => {
  return useContext(CartContext);
};

// const CartProvider = ({ children }) => {
//   return <CartContext.Provider value={{

//   }}> {children} </CartContext.Provider>;
// };

// export const useCartContext = () => {
//   return useContext(CartContext);
// };

// export { CartContext, CartProvider };
