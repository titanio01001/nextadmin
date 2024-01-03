"use client"
import React from 'react';
import styles from './Videos.module.css'

const VideoSeguridad = () => {
  return (
    <video className={styles.video} src='/seguridad.mp4' type="video/mp4" controls muted></video>
  )
}

export default VideoSeguridad