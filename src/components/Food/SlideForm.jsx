import React, { useContext, useRef } from "react";
import FoodContext from "../../context/FoodContext";

import styles from "./food.module.css";

const SlideForm = ({ itemId }) => {
  const ctx = useContext(FoodContext);
  const inputRef = useRef(null);

  const clickHandler = (e) => {
    e.preventDefault();

    ctx.dispatch({
      type: "ADD_TO_BASKET",
      payload: { id: itemId, amount: +inputRef.current.value },
    });
  };

  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="amount">
        Amount
      </label>
      <input
        className={styles.input}
        type="number"
        min={1}
        max={5}
        defaultValue={1}
        ref={inputRef}
      />
      <button
        type="submit"
        className={styles["add-button"]}
        onClick={clickHandler}
      >
        Add
      </button>
    </form>
  );
};

export default SlideForm;
