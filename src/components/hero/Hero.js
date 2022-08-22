import React from "react";

import { hero_piano } from "~/images";

import styles from "./hero.module.scss";

function Hero() {
  const handleScrollToCourse = () => {
    console.log(1);
  }

  return (
    <div className={styles["hero"]} data-aos="fade-up">
      <img src={hero_piano} alt="hero_piano" />
      <h1>Sharing the feelings</h1>
      <button
        onClick={handleScrollToCourse}
        to="/khoa-hoc"
        className="explore"
      >
        Các khóa học
      </button>
    </div>
  );
}

export default Hero;
