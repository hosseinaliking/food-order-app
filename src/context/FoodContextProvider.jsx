import React, { useReducer } from "react";
import { useState } from "react";
import {
  foodReducerFunction,
  initState,
} from "../constants/foodReducerFunction";

import FoodContext from "./FoodContext";

const FoodContextProvider = ({ children }) => {
  const [foodReducer, dispatch] = useReducer(foodReducerFunction, initState);
  const [isCheckout, setIsCheckout] = useState(true);

  const checkoutHandler = () => {
     foodReducer.basket.length > 0 ? setIsCheckout(false) : setIsCheckout(true)
  }

  const cancelOrder = () => {
    setIsCheckout(true)
  }

  const orderSet = () => {
    dispatch({type: 'ORDER_SET'})
  }

  const initProvider = {
    basket: foodReducer.basket,
    food: foodReducer.food,
    totalAmount: foodReducer.totalAmount,
    
    isCheckout: isCheckout,
    checkoutHandler: checkoutHandler,
    cancelOrder:cancelOrder,
    
    dispatch,
    orderSet:orderSet,
  };
  return <FoodContext.Provider value={initProvider}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
