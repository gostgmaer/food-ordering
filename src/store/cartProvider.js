import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const ifPresent = state.item.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.item[ifPresent];
      let updatedItem;
      let updatedItems;
      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.item];
        updatedItems[ifPresent] = updatedItem;
      } else {
        updatedItem = {
          ...action.item,
        };
        updatedItems = state.item?.concat(action.item);
      }

      const updateTotal =
        state.totalAmount + action.item.price * action.item.amount;
      console.log(updatedItems);
      return { item: updatedItems, totalAmount: updateTotal };

    case "REMOVE":
      console.log(action.id);

      const existingCart = state.item.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.item[existingCart];
      let updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItemData;

      if (existingItem.amount === 1) {
        updatedItemData = state.item.filter((item) => item.id !== action.id);
      } else {
        let UpdatedItems = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };

        updatedItemData = [...state.item];

        updatedItemData[existingCart] = UpdatedItems;
      }

      return {
        item: updatedItemData,
        totalAmount: updatedTotalAmount,
      };

      break;

    default:
      break;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemtoCardHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const RemoveItemtoCardHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContextHelper = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCardHandler,
    removeItem: RemoveItemtoCardHandler,
  };
  return (
    <CartContext.Provider value={cartContextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
