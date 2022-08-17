import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Tomato Timer</h1>
      <div className={styles.line}></div>
    </header>
  );
};

export default Header;
