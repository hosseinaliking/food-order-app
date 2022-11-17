import React, { useState, useContext } from "react";
import FoodContext from "../../context/FoodContext";

import styles from "./nav.module.css";
import Basket from "../Modal/Basket";

import logo from "../../assets/img/chef1.png";
import avatar from "../../assets/img/avatar.png";

import { CiShoppingBasket } from "react-icons/ci";

const Nav = () => {
  const ctx = useContext(FoodContext);

  // State for the Basket (Modal)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles["main-nav"]}>
        <div className={styles["container-logo"]}>
          <img
            src={logo}
            alt="Logo of food order app website"
            className={styles.logo}
          />
          <span className={styles["logo-text"]}>city</span>
        </div>

        <div className={styles["container-menu"]}>
          <ul className={styles["menu-list"]}>
            <li className={styles["menu-item"]}>Home</li>
            <li className={styles["menu-item"]}>About</li>
            <li className={styles["menu-item"]}>Menu</li>
            <li className={styles["menu-item"]}>Service</li>
          </ul>

          <div className={styles["container-basket"]}>
            <CiShoppingBasket
              className={styles["basket-icon"]}
              onClick={() => setIsOpen((pre) => !pre)}
            />
            <span
              className={styles["basket-number"]}
              onClick={() => setIsOpen((pre) => !pre)}
            >
              {ctx.basket.length}
            </span>
          </div>

          <div className={styles["container-avatar"]}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
          </div>
        </div>
        
        <Basket isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
};

export default Nav;
