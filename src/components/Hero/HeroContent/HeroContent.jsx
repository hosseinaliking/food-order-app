import React from "react";

import styles from "./heroContent.module.css";

import { MdOutlineDirectionsBike } from "react-icons/md";

const HeroContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bike}>
        <p className={styles["bike-text"]}>Bike Delivery</p>
        <MdOutlineDirectionsBike className={styles["bike-icon"]} />
      </div>

      <div className={styles.title}>
        <h1 className={styles["title-text"]}>
          The Fastest Delivery In{" "}
          <span className={styles["city-text"]}>Your City</span>{" "}
        </h1>
      </div>

      <div className={styles["content"]}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quasi optio, quas perferendis sapiente sint illo ipsum earum
          cupiditate aut itaque officiis, error eveniet ea maiores labore. Autem
        </p>

        <button>Order now</button>
      </div>
    </div>
  );
};

export default HeroContent;
