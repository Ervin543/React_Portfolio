import React from "react";

function Project(props) {
  return (
    <div className="project">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt={props.title} />
        <div className="project-details">
          <h3>{props.title}</h3>
          <span>View</span>
        </div>
      </a>
      <a href={props.github} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  );
}

export default Project;
