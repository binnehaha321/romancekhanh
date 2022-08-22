import React from "react";

import { Navbar } from "~/components";
import Hero from "~/components/hero/Hero";

import styles from "./top.module.scss";

function TopSection() {
  return (
    <section className={styles["top"]}>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </section>
  );
}

export default TopSection;
