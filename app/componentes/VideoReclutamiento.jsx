"use client"
import React from 'react';
import styles from './Videos.module.css'

const VideoReclutamiento = () => {
  return (
    <video className={styles.video} src='/spot.mp4' type="video/mp4" poster='/poster.png' controls muted></video>
  )
}

export default VideoReclutamiento