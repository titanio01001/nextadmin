import React from 'react';
import styles from './sidebar.module.css';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
 {
  title: "Líneas de Negocio",
  list: [
    
    {
      title: "Novedades",
      path: "/dashboard",
    },
    {
      title: "Limpieza",
      path: "/dashboard/Limpieza",
    },
    {
      title: "Facility",
      path: "/dashboard/Mantenimiento",
    },
    {
      title: "Seguridad Física",
      path: "/dashboard/SeguridadF",
    },
    {
      title: "Seguridad Electrónca",
      path: "/dashboard/SeguridadE",
    },
  ]
 } 
]
const Sidebar = () => {
  return (
    <div className={styles.container}>
      
      <ul className={styles.list}>
      {menuItems.map((cat) => (
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink item={item} key={item.title} />
          ))}
          </li>
      ))}
      </ul>
      </div>
  );
};

export default Sidebar