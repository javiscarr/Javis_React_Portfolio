import React from "react";
import { projects } from "../../data.js";

function Projects() {
  return (
    <section id="gallery">
      <div className="text-center">
        <div>
          <h2 className="m-0">My Gallery</h2>
          <p>Take a dive into some of the creative work I've recently done.</p>
        </div>

        <div>
          {projects.map((project) => (
            <div className="project contents row column">
              <h1 className="projectTitle">{project.title}</h1>
              <h5>Click image for deployed application</h5>
              <a href={project.heroku}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="projectPics"
                />
              </a>

              <a
                href={project.github}
                key={project}
                className="m-2 p-2 text-decoration-none link-secondary rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
