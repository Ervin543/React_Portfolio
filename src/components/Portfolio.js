import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <section id = 'portfolio' style = {{display:"none"}}>
      <h2>Portfolio</h2>
      <div className="project-list">
        <Project
          title="Project 1"
          image="path/to/image"
          link="https://chris70a.github.io/CryptoWeather/"
          github="https://github.com/Chris70A/CryptoWeather"
        />
        <Project
          title="Project 2"
          image="path/to/image"
          link="https://blooming-stream-98963.herokuapp.com/"
          github="https://github.com/KoreyHermann/rollie-pollies"
        />
        <Project
          title="Project 3"
          image="path/to/image"
          link="https://project3.com"
          github="https://github.com/Ervin543/project3"
        />
        <Project
          title="Project 4"
          image="path/to/image"
          link="https://project4.com"
          github="https://github.com/Ervin543/project4"
        />
        <Project
          title="Project 5"
          image="path/to/image"
          link="https://project5.com"
          github="https://github.com/Ervin543/project5"
        />
        <Project
          title="Project 6"
          image="path/to/image"
          link="https://project6.com"
          github="https://github.com/Ervin543/project6"
        />
      </div>
    </section>
  );
}

export default Portfolio;
