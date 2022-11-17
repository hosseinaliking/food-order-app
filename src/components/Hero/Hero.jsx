import React from "react";

import HeroContent from "./HeroContent/HeroContent";
import HeroBanner from "./HeroBanner/HeroBanner";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <HeroContent />
      <HeroBanner />
    </div>
  );
};

export default Hero;
