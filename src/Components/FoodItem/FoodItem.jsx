import React, { useContext, useRef, useState } from "react";
import { DUMMY_MEALS } from "../../assets/Data";
import CartContext, { useCartContext } from "../../store/Cart-context";
import Input from "../../UI/Input/Input";
import "./foodItem.scss";
const FoodItem = () => {

  const MealItem = ({ item }) => {
    const cartCtx = useContext(CartContext)
    const [isValid, setIsValid] = useState(true);
    const inputRed = useRef()


    const addToCartItem = (amount) => {
     
      const enterAmount = Number(inputRed.current.value)
      const enteramountNumber = +enterAmount
      if (enterAmount === 0 || enterAmount < 1 || enterAmount > 10) {
        setIsValid(false)
        return
      } else {
        setIsValid(true)
      }
      cartCtx.addItem({id:item.id,name:item.name,amount:enteramountNumber,price:item.price})


    }
    return (
      <li className="mealItem">
        <div className="itemData">
          {" "}
          <h4 className="title">{item.name}</h4>
          <p>{item.description}</p>
          <label>{`$${item.price}`}</label>
        </div>
        <div className="itemForm">
          <Input ref={inputRed} input={{ defaultValue: 1, id: 'amount_' + item.id, min: 1, max: 1000, step: 1, type: "number" }} />
          <button className="btn btn-cart" onClick={addToCartItem}>+Add to Cart</button>
          {!isValid && <p>Please add a value between (1-10)</p>}
        </div>
      </li>
    );
  };

  return (
    <div className="FoodItem">
      <div className="footItemsWrapper">
        <ul>
          {DUMMY_MEALS.map((item) => (
            <MealItem key={item.id} item={item}></MealItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodItem;
