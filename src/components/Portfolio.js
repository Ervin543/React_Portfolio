import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        <Project
          title="Project 1"
          image="path/to/image"
          link="https://project1.com"
          github="https://github.com/username/project1"
        />
        <Project
          title="Project 2"
          image="path/to/image"
          link="https://project2.com"
          github="https://github.com/username/project2"
        />
        <Project
          title="Project 3"
          image="path/to/image"
          link="https://project3.com"
          github="https://github.com/username/project3"
        />
        <Project
          title="Project 4"
          image="path/to/image"
          link="https://project4.com"
          github="https://github.com/username/project4"
        />
        <Project
          title="Project 5"
          image="path/to/image"
          link="https://project5.com"
          github="https://github.com/username/project5"
        />
        <Project
          title="Project 6"
          image="path/to/image"
          link="https://project6.com"
          github="https://github.com/username/project6"
        />
      </div>
    </section>
  );
}

export default Portfolio;
