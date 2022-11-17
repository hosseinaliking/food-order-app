import React, {useContext} from "react";
import FoodContext from "../../context/FoodContext";

import styles from "./basketItem.module.css";

const BasketItem = ({ item }) => {
  const ctx = useContext(FoodContext);

  const addHandler = () => {
    ctx.dispatch({type: 'ADD_TO_BASKET', payload: {id: item.id, amount: 1}})
  }

  const removeHandler = () => {
    ctx.dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: item.id}})
  }

  return (
    <li className={styles["basket-item"]}>
      <img src={item.image} alt="food" className={styles["basket-img"]} />

      <div className={styles["basket-details"]}>
        <p className={styles["basket-item--name"]}>{item.name}</p>
        <p className={styles["basket-item--price"]}>
          {item.price}$ x <span className={styles.amount} >{item.amount}</span>
        </p>
      </div>

      <div className={styles["basket-form"]}>
        <button className={styles["basket-form-btn"]} onClick={removeHandler} >-</button>
        <p className={styles["item-number"]}>1</p>
        <button className={styles["basket-form-btn"]} onClick={addHandler} >+</button>
      </div>
    </li>
  );
};

export default BasketItem;
