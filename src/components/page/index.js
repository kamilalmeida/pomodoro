import React from "react";
import Header from "../header";
import styles from "./styles.module.css";

import Timer from "../timer";

const Page = () => {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <div className={styles.bloco_timer}>
          <Timer />
        </div>
      </div>
    </>
  );
};

export default Page;
