import React from "react";
import { projects } from "../data.js";

export default function Projects(props) {
  return (
    <section id="gallery">
      <div className="text-center">
        <div>
          <h1 className="m-0">My Gallery</h1>
        </div>

        <div>
          {projects.map((project) => (
            <a
              href={project.heroku || project.github}
              key={project}
              className="m-2 p-2 text-decoration-none link-secondary rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project">
                <img src={Image}></img>
                <h1 className="project">{project.title}</h1>
                <p className="project">{project.slogan}</p>
                <p className="project">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <br></br>
    </section>
  );
}
