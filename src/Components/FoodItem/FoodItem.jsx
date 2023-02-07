
import React, { Fragment, useContext, useEffect, useRef, useState } from "react";

import CartContext, { } from "../../store/Cart-context";
import Input from "../../UI/Input/Input";
import InvokeAPI, { cleanParam } from "../../Utility/Services/InvokeApi";
import "./foodItem.scss";
const FoodItem = () => {
  const [foodItems, setFoodItems] = useState(null);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getFoodData = async () => {
    setIsLoading(true)
    let param = {
    };
    cleanParam(param)
    try {
      const res = await InvokeAPI(`shop.json`, "get", {}, {}, param);

      setFoodItems(Object.entries(res))
      foodItems?.forEach(element => {

        element['1']['uuid'] = element['0']

        delete (element['0'])

      });

    } catch (error) {
    
      setHttpError(error.message)
     

    }
    setIsLoading(false)
  };
  useEffect(() => {


    getFoodData()
   
  }, []);



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
      cartCtx.addItem({ id: item['1'].id, name: item['1'].name, amount: enteramountNumber, price: item['1'].price })


    }
    return (
      <li className="mealItem">
        <div className="itemData">
          {" "}
          <h4 className="title">{item['1'].name}</h4>
          <p>{item.description}</p>
          <label>{`$${item['1'].price}`}</label>
        </div>
        <div className="itemForm">
          <Input ref={inputRed} input={{ defaultValue: 1, id: 'amount_' + item['1'].id, min: 1, max: 1000, step: 1, type: "number" }} />
          <button className="btn btn-cart" onClick={addToCartItem}>+Add to Cart</button>
          {!isValid && <p>Please add a value between (1-10)</p>}
        </div>
      </li>
    );
  };

  return (
    <div className="FoodItem">
      <div className="footItemsWrapper">
        {isLoading ? <div className="loading">Data is Loading.....</div> : <Fragment> {httpError ? <div className="error">{httpError}</div> : <ul>
          {foodItems?.map((item) => {

            return (
              <MealItem key={item['0']} item={item}></MealItem>
            )
          })}
        </ul>} </Fragment>}
      </div>
    </div>
  );
};

export default FoodItem;
