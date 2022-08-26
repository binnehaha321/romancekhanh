import React from "react";

import Hero from "~/components/hero/Hero";

import styles from "./top.module.scss";

function TopSection() {
  return (
    <section className={styles["top"]}>
      <div className="container">
        <Hero />
      </div>
    </section>
  );
}

export default TopSection;
