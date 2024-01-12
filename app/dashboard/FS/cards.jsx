"use client"
// ExpandableCard.js
import {motion} from 'framer-motion';
import { useState } from 'react';
import { MdCleaningServices } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import styles from './cards.module.css'

function Cards() {

  const [isOpen, setIsOpen] = useState([false, false, false]); // Un estado para cada tarjeta

  const toggleCard = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={styles.marco}>
    <div className={styles.Container}>
      <div>
        <motion.div onClick={() => toggleCard(0)} className={styles.card}>
          <div className={styles.titulo}>
            <motion.h2 className={styles.h2}>Servicio A</motion.h2>
            <MdMiscellaneousServices className={styles.icon1} />
          </div>
          {isOpen[0] && (
            <motion.div>
              <h4>Descripción Servicio</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div>
        <motion.div onClick={() => toggleCard(1)} className={styles.card}>
          <div className={styles.titulo}>
            <motion.h2 className={styles.h2}>Servicio B</motion.h2>
            <MdCleaningServices className={styles.icon1} />
          </div>
          {isOpen[1] && (
            <motion.div>
              <h4>Descripción Servicio</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div>
        <motion.div onClick={() => toggleCard(2)} className={styles.card}>
          <div className={styles.titulo}>
            <motion.h2 className={styles.h2}>Servicio C</motion.h2>
            <MdOutlineHomeRepairService className={styles.icon1} />
          </div>
          {isOpen[2] && (
            <motion.div>
              <h4>Descripción Servicio</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  </div>
);
}

export default Cards;


