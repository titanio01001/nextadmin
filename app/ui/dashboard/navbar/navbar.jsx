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
        <a href="/">Home</a>
        <a href="">Contacto</a>
        <button className={styles.profilebutton}>
        <span>
        <CgProfile className={styles.CgProfile}
        style={{
          bottom: '10%',
          position: 'relative',
          float: 'right',
         
         
          
        }}
        
        size="3vh"
        color="white"
        /> 
        <a className={styles.cuenta}>Mi Cuenta</a> 
        </span>
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
