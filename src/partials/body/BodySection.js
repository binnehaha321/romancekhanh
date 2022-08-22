import React from "react";
import { Courses } from "~/pages";
import Milestone from "./milestone/Milestone";

function BodySection() {
  return (
    <div className="body" style={{ overflow: "hidden" }}>
      <Courses />
      <Milestone />
    </div>
  );
}

export default BodySection;
