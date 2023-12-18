import React from 'react';
import styles from '@/app/ui/dashboard/sidebar/sidebar.module.css';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
 {
  title: "Menú",
  list: [
    {
      title: "Inicio",
      path: "/",
    },
    {
      title: "Servicios",
      path: "/app/dashboard",
    },
    {
      title: "Limpieza",
      path: "/app/dashboard/Limpieza",
    },
    {
      title: "Mantenimiento",
      path: "/app/dashboard/Mantenimiento",
    },
    {
      title: "Seguridad Física",
      path: "/app/dashboard/Seguridad Fisica",
    },
    {
      title: "Seguridad Electrónca",
      path: "/app/dashboard/Seguridad Electronica",
    },
  ]
 } 
]
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/IMAGOTIPO GRUPO EULEN BLANCO.png" width={311} height={116} />
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