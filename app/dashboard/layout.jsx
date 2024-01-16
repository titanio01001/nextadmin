import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import styles from '../ui/dashboard/dashboard.module.css'
import Background from '../componentes/background'


const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
        <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
        </div>
          <div>
           <Background />
          </div>
    </div>
  )
}

export default Layout