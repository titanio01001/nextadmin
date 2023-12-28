import React from 'react';
import styles from './sidebar.module.css';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
 {
  title: "Servicios",
  list: [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Novedades",
      path: "/dashboard",
    },
    {
      title: "Limpieza",
      path: "/dashboard/Limpieza",
    },
    {
      title: "Mantenimiento",
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
      <div>
        <Image className="logo" src="/IMAGOTIPO GRUPO EULEN BLANCO.png" width={311} height={116} />
      </div>
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