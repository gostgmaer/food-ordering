import React from "react";
import { MdPlusOne, MdOutlineFlutterDash } from "react-icons/md";
import { DUMMY_MEALS } from "../../assets/Data";
import { useCartContext } from "../../store/Cart-context";
import Input from "../../UI/Input/Input";
import Checkout from "../Checkout/Checkout";
import "./Cart.scss";

const CartBlock = () => {
  const { item } = useCartContext();

  item?.forEach(element => {
    element['subTotal'] = Number(element.price) * element.amount
  });

  const total = item.reduce((curr, data) => (curr + data.subTotal), 0)


  const MealItem = ({ cartItem }) => {
    console.log(cartItem);
    const { addItem, removeItem } = useCartContext()
    return (
      <li className="mealItem">
        <div className="itemData">
          <h4 className="title">{cartItem.name}</h4>
          <label>{`$${cartItem.price}`} x {cartItem.amount}</label>
        </div>
        <div className="itemForm">
          <button onClick={() => removeItem(cartItem.id)} className="btn btn-plus">-1</button>
          <button onClick={() => addItem({ id: cartItem.id, name: cartItem.name, amount: 1, price: cartItem.price })} className="btn btn-plus"><MdPlusOne></MdPlusOne></button>
        </div>
      </li>
    );
  };
  return (
    <div className="CartBlock">
      <div className="CartWrapper">
        <ul>
          {item.map((cartItem) => (
            <MealItem key={cartItem.id} cartItem={cartItem}></MealItem>
          ))}
        </ul>
        <div className="total">
          <span className="label">Total Amount: </span>
          <span className="amount">{total.toFixed(2)}</span>
        </div>
        <div className="order">
          <button className="btn btnclr"> clear all</button>
          <button className="btn btn-order">Order Now</button>
        </div>
      </div>
      <div className="checkoutWrapper">
      <Checkout></Checkout>
      </div>
    </div>
  );
};

export default CartBlock;
