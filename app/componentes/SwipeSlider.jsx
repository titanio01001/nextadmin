"use client"
// components/SwipeSlider.js
import React from 'react';
import Slider from 'react-slick';
import styles from './SwipeSlider.module.css';
import "./slick.css";
import "./slick-theme.css";


const SwipeSlider = ({ items }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

      <Slider {...settings} className={styles.slider}>
      {items.map((item, index) => (
        <div key={index} className={styles.slide}>
          <img className={styles.img} src={item} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
    
    
  );
};

export default SwipeSlider

