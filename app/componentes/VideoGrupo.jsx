"use client"
import React from 'react';
import styles from './Videos.module.css'

const VideoGrupo = () => {
  return (
    <video className={styles.video} src='/GrupoEC.mp4' type="video/mp4" autoPlay controls muted loop></video>
  )
}

export default VideoGrupo