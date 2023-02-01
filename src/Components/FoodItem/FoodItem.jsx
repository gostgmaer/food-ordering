import React from "react";
import { DUMMY_MEALS } from "../../assets/Data";
import Input from "../../UI/Input/Input";
import "./foodItem.scss";
const FoodItem = () => {
  const MealItem = ({ item }) => {
    return (
      <li className="mealItem">
        <div className="itemData">
          {" "}
          <h4 className="title">{item.name}</h4>
          <p>{item.description}</p>
          <label>{`$${item.price}`}</label>
        </div>
        <div className="itemForm">
          <Input input={{defaultValue:1, id:'amount_'+item.id,min:1,max:1000,step:1, type:"number"}} />
          <button className="btn btn-cart">+Add to Cart</button>
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
