"use client"
// Navbar.js

import React, { useState } from 'react';
import styles from './navbar.module.css';
import { FaUser } from 'react-icons/fa';


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
        <a href="/">Home</a>
        <a href="">Contacto</a>
        <button className={styles.profilebutton}>
        <a href="/">Mi Cuenta</a>
        <FaUser className={styles.icon} />
      </button>
        
      </div>
      <div className={styles.navlinksopen}></div>
      <div className={styles.mobilemenuicon} onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
