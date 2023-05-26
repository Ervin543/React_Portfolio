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
          link="https://barkbook-1.herokuapp.com/"
          github="https://github.com/KoreyHermann/BarkBook"
        />
      
          <a href = "https://github.com/KoreyHermann/BarkBook"> Project 3 GitHub Repository</a>
      </div>
    </section>
  );
}

export default Portfolio;
