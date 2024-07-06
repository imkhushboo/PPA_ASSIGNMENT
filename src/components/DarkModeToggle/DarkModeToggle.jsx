"use client"

import React, { useContext } from "react";
import styles from './Toggle.module.css';
import {ThemeContext} from '../../../context/ThemeContext'

const DarkModeToggle = () => {
  console.log("MODE1")
  const { toggle,mode } = useContext(ThemeContext);
  console.log("MODE1", toggle, mode)
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;