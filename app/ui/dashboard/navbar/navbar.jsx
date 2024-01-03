"use client"
// Navbar.js

import React, { useState } from 'react';
import styles from './navbar.module.css';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <img className={styles.logo} src="/logo.png" alt="logo" />
      </div>
      <div className={styles.navlinks}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <span>
        <CgProfile className={styles.CgProfile}
        style={{
          bottom: '10%',
          position: 'relative',
          float: 'right',
          
        }}
        size="4vh"
        color="white"
        />
        </span>
      </div>
      <div className={styles.navlinksopen}></div>
      <div className={styles.mobilemenuicon} onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
