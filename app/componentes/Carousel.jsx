"use client"
import React, { useState } from 'react';
import VideoSeguridad from './VideoSeguridad';
import VideoMantenimiento from './VideoMantenimiento';
import VideoReclutamiento from './VideoReclutamiento';
import VideoGrupo from './VideoGrupo';
import styles from './SwipeSlider.module.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const Slide1 = () => (
  <div className={styles.slide}>
    <VideoSeguridad />
  </div>
);

const Slide2 = () => (
  <div className={styles.slide}>
    <VideoReclutamiento />
  </div>
);

const Slide3 = () => (
  <div className={styles.slide}>
    <VideoMantenimiento />
  </div>
);

const Slide4 = () => (
  <div className={styles.slide}>
    <VideoGrupo />
  </div>
);

const JSXCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [ <Slide4 key="4" />, <Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" />];
  const totalComponents = components.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalComponents - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalComponents - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.slider}>
    <div className={styles.container}>
      <button className={styles.prev} onClick={handlePrev}>
        <MdOutlineKeyboardArrowLeft  className={styles.icons} />
      </button>
      <div className={styles.slide}>{components[currentIndex]}</div>
      <button className={styles.next} onClick={handleNext}>
        <MdOutlineKeyboardArrowRight className={styles.icons} />
      </button>
    </div>
  </div>
    );
};

export default JSXCarousel;
