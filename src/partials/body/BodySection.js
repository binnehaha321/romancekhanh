import React from "react";
import { Courses } from "~/pages";
import Milestone from "./milestone/Milestone";

function BodySection() {
  return (
    <section className="body" style={{ overflow: "hidden" }}>
      <Courses />
      <Milestone />
    </section>
  );
}

export default BodySection;
