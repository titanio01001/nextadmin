"use client"

import React from 'react';
import styles from './navbar.module.css'
import { MdSearch } from "react-icons/md"
import { usePathname } from 'next/navigation';
const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch color='#002664'/>
          <input type="text" placeholder='Buscar...' className={styles.input}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar