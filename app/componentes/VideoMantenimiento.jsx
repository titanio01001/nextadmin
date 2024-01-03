"use client"
import React from 'react';
import styles from './Videos.module.css'

const VideoMantenimiento = () => {
  return (
    <video className={styles.video} src='/mantenimiento.mp4' type="video/mp4" controls muted></video>
  )
}

export default VideoMantenimiento