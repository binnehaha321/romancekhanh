import React from "react";

import styles from "./level.module.scss";

function Level({ level, vneseLevel, icon }) {
  return (
    <div className={`${styles["level"]}`}>
      <div className={level}>
        <div
          className={styles["badge"]}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className={styles["badge-icon"]}>{icon}</div>
          <div className={styles["badge-line"]}></div>
        </div>
        <p
          className={styles["name"]}
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          {vneseLevel}
        </p>
      </div>
    </div>
  );
}

export default Level;
