"use client"

import React from 'react';
import styles from '@/app/ui/dashboard/sidebar/menuLink/menuLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({item}) => {

  const pathname = usePathname()

  console.log(pathname)
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.title}
    </Link>
  )
}

export default MenuLink 