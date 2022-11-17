import React, { useContext, useState } from "react";
import FoodContext from "../../context/FoodContext";
import uesSend from "../../hooks/useSend";
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import BasketItem from "./BasketItem";

import styles from "./basket.module.css";
import "../../App.css";

import loading from "../../assets/img/loading.gif";

const Basket = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [order, setOrder] = useState(false);
  const ctx = useContext(FoodContext);
  const { sendData: sendFoodData, loading: sendDataLoading } = uesSend();

  const orderHandler = () => {
    sendFoodData({ name: name, address: address, zip: zip });

    setName("");
    setAddress("");
    setZip("");
    setOrder(true);
  };

  const closeModalHandler = () => {
    ctx.checkoutHandler();
    setOrder(false);
    setIsOpen(false);
  };

  const basketContent = (
    <ul className={styles["basket-items"]}>
      {ctx.basket.length !== 0 &&
        ctx.basket.map((item, index) => {
          return <BasketItem key={index} item={item} />;
        })}
      {ctx.basket.length === 0 && (
        <p className={styles["empty-text"]}>The basket is empty</p>
      )}
    </ul>
  );

  const basketForm = (
    <form className={styles["basket-form"]}>
      <div className={styles["form-group"]}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          value={name}
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          className={styles["form-input-basket"]}
        />
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="address" className={styles.label}>
          Address:
        </label>
        <input
          value={address}
          type="text"
          name="address"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
          className={styles["form-input-basket"]}
        />
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="zip" className={styles.label}>
          Zip Code:
        </label>
        <input
          value={zip}
          type="text"
          name="zip"
          id="zip"
          onChange={(e) => setZip(e.target.value)}
          className={styles["form-input-basket"]}
        />
      </div>
    </form>
  );

  const loaderContent = (
    <div className={styles["loading-container"]}>
      <img src={loading} alt="loading" className={`${order ? styles.order : styles['loading-image-order']}`} />
    </div>
  );

  console.log(sendDataLoading)

  return ReactDOM.createPortal(
    <CSSTransition in={isOpen} timeout={300} classNames="example" unmountOnExit>
      <div
        className={`${styles.container} ${order && styles["container-order"]}`}
      >
        {ctx.isCheckout && basketContent}
        {!ctx.isCheckout && !order && !sendDataLoading && basketForm}
        {order && sendDataLoading && loaderContent}
        {order && !sendDataLoading && (
          <div className={styles['container-cancel']} >
            <p>Order recive</p>
            <button className={styles['cancel-basket']} onClick={closeModalHandler}>Close</button>
          </div>
        )}

        {/* Bottom of basket */}
        {!order ? (
          <div className={styles["total-bakset"]}>
            <div className={styles["total-details"]}>
              <div className={styles["sub-total"]}>
                <p>Sub Total</p>
                <span>$ {ctx.totalAmount}</span>
              </div>

              <div className={styles["delivery"]}>
                <p>Delivery</p>
                <span>$ {ctx.basket.length !== 0 ? 10 : 0}</span>
              </div>

              <div className={styles["total-line"]} />

              <div className={styles["total"]}>
                <p>Total</p>
                <span>
                  $ {ctx.basket.length !== 0 ? ctx.totalAmount + 10 : 0}
                </span>
              </div>

              <div className={styles["total-button"]}>
                {!ctx.isCheckout && (
                  <button className={styles.btn} onClick={orderHandler}>
                    Order
                  </button>
                )}

                {ctx.isCheckout ? (
                  <button className={styles.btn} onClick={ctx.checkoutHandler}>
                    Checkout
                  </button>
                ) : (
                  <button onClick={ctx.cancelOrder} className={styles.btn}>
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </CSSTransition>,
    document.getElementById("basket-modal")
  );
};

export default Basket;
