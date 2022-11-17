import React from 'react'

import styles from './heroBanner.module.css'

import heroBanner from '../../../assets/img/heroBg.png'

const HeroBanner = () => {
  return (
    <div className={styles.container} >
      <img src={heroBanner} alt="hero banner" />
    </div>
  )
}

export default HeroBanner