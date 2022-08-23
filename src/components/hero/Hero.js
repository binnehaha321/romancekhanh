import React from "react";

import { hero_piano } from "~/images";

import styles from "./hero.module.scss";

function Hero() {

  return (
    <div className={styles["hero"]} data-aos="fade-up">
      <img src={hero_piano} alt="hero_piano" />
      <h1>Sharing the feelings</h1>
    </div>
  );
}

export default Hero;
