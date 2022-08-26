import React from "react";

import milestones from "~/api/milestones";

import styles from "./detail.module.scss";

function Detail() {
  return (
    <div className={styles["detail"]}>
      {milestones.map((milestone) => (
        <div
          data-aos="zoom-out"
          key={milestone.id}
          className={`${styles[`${milestone.level}`]} ${
            styles["detail-block"]
          }`}
        >
          <div className={styles["icon"]}>{milestone.icon}</div>
          <div className={styles["content"]}>
            <h4 className={styles["heading"]}>{milestone.vneseLevel}</h4>
            <p
              className={styles["duration"]}
            >{`Thời gian (trung bình) : ${milestone.duration} tháng`}</p>
            <p className={styles["description"]}>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
