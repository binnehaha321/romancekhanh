import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import styles from "./courseItem.module.scss";

function CourseItem({ course, image, description, path }) {
  return (
    <motion.div className={styles["course-item"]}>
      <div className={styles["image"]}>
        <img src={image} alt={course} />
      </div>
      <div className={styles["content"]}>
        <h4>{course}</h4>
        <div className={styles["content-detail"]}>
          <p className={styles["description"]}>{description}</p>
          <Link to={path} className={`button ${styles["see-more"]}`}>
            Xem thêm
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseItem;
