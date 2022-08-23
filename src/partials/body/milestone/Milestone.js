import React from "react";

import Level from "./components/level/Level";
import Detail from "./components/detail/Detail";
import milestones from "~/api/milestones";

import styles from "./milestone.module.scss";

function Milestone() {
  return (
    <div className={styles["milestone"]}>
      <div className="container">
        <h2>Lộ trình</h2>
        <div className={styles["milestone-chart"]}>
          {milestones.map((milestone) => (
            <Level
              key={milestone.id}
              level={milestone.level}
              vneseLevel={milestone.vneseLevel}
              icon={milestone.icon}
            />
          ))}
        </div>
        <Detail />
      </div>
    </div>
  );
}

export default Milestone;
