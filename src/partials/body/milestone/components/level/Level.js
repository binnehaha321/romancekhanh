import React from "react";

import styles from "./level.module.scss";

function Level({ level, vneseLevel, icon }) {
  return (
    <div className={`${styles["level"]}`}>
      <div className={level}>
        <div className={styles["badge"]}>
          <div className={styles["badge-icon"]}>{icon}</div>
          <div className={styles["badge-line"]}></div>
        </div>
        <p className={styles["name"]}>{vneseLevel}</p>
      </div>
    </div>
  );
}

export default Level;
