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
      title: "Facility Services",
      path: "/dashboard/FS",
    },
    {
      title: "Servicios Transitorios",
      path: "/dashboard/ST",
    },
    {
      title: "Seguridad Física",
      path: "/dashboard/SeguridadF",
    },
    {
      title: "Seguridad Electrónca",
      path: "/dashboard/SeguridadE",
    },
    {
      title: "Servicios Socio-Sanitarios",
      path: "/dashboard/SSoc",
    },
    {
      title: "Formación",
      path: "/dashboard/F",
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