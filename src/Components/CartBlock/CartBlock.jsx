import React from 'react'
import { DUMMY_MEALS } from '../../assets/Data';
import Input from '../../UI/Input/Input';
import './Cart.scss'

const CartBlock = () => {
  const MealItem = ({ item }) => {
    return (
      <li className="mealItem">
        <div className="itemData">
          {" "}
          <h4 className="title">{item.name}</h4>
          <label>{`$${item.price}`}</label>
        </div>
        <div className="itemForm">
          <Input input={{ defaultValue: 1, id: 'amount', min: 1, max: 1000, step: 1, type: "number" }} />
          <button className="btn btn-cart">Remove from Cart</button>
        </div>
      </li>
    );
  };
  return (
    <div className='CartBlock'>
      <div className="CartWrapper">
        <ul>
          {DUMMY_MEALS.map((item) => (
            <MealItem key={item.id} item={item}></MealItem>
          ))}
        </ul>
        <div className="total">
          <span className="label">Total Amount: </span>
          <span className='amount'>35</span>
        </div>
        <div className="order">
          <button className='btn btnclr'> clear all</button>
          <button className='btn btn-order'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default CartBlock