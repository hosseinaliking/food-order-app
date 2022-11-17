import React, { useState, useContext } from "react";
import FoodContext from "../../context/FoodContext";
import useFetch from "../../hooks/useFetch";
import SlideForm from "./SlideForm";

import styles from "./food.module.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import loading from "../../assets/img/loading.gif";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Food = () => {
  const [swiper, setSwiper] = useState();
  const { loading: foodLoading} = useFetch();
  const ctx = useContext(FoodContext);

  const prevHandler = () => {
    swiper.slidePrev();
  };

  const nextHandler = () => {
    swiper.slideNext();
  };


  return (
    <div className={`${styles.container}`}>
      {foodLoading && (
        <img src={loading} alt="loading animation" className={styles.loading} />
      )}

      {!foodLoading && ctx.food.length > 0 && (
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={(s) => {
            // console.log("initialize swiper", s);
            setSwiper(s);
          }}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          {ctx.food.map((item, index) => {
            return (
              <SwiperSlide key={index} className={styles["swiper-slide"]}>
                <figure>
                  <img
                    src={item.image}
                    alt="food"
                    className={styles["slide-img"]}
                  />
                </figure>

                <div className={styles["slide-details"]}>
                  <p className={styles["slide-name"]}>{item.name}</p>
                  <p className={styles["slide-calory"]}>
                    {item.calory} calories
                  </p>
                  <p className={styles["slide-price"]}>
                    {item.price}{" "}
                    <span className={styles["doller-sign"]}>$</span>
                  </p>
                </div>

                <div className={styles["slide-form"]}>
                  <SlideForm itemId={item.id} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <div className={styles["container-button"]}>
        <button className={styles["slider-button"]} onClick={prevHandler}>
          <MdKeyboardArrowLeft className={styles["slider-icon"]} />
        </button>
        <button className={styles["slider-button"]} onClick={nextHandler}>
          <MdKeyboardArrowRight className={styles["slider-icon"]} />
        </button>
      </div>
    </div>
  );
};

export default Food;
