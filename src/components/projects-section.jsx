import React from "react";
import ProjectCard from "./projectCard";

function ProjectsSection() {
  return (
    <div id="skills" className="container-fluid ">
      <h3>SOME OF MY PROJECTS</h3>
      <div data-aos="fade-left" className="underLineDark"></div>
      <div className="container-fluid projects">
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectsSection;
