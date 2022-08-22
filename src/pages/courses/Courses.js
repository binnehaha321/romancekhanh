import React, { useState, useEffect, useRef } from "react";

import courses from "~/api/courses";
import CourseItem from "./courseItem/CourseItem";

import { motion } from "framer-motion";

import styles from "./courses.module.scss";

function Courses() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div
      className={styles["courses"]}
      data-aos="flip-up"
    >
      <div className="container">
        <h2>Khóa học</h2>
        <motion.div ref={carouselRef} className={styles["carousel"]}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles["carousel-layout"]}
          >
            {courses.map((course) => (
              <CourseItem
                key={course.id}
                image={course.image}
                course={course.course}
                description={course.description}
                path={course.path}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Courses;
