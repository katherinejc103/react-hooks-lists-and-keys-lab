import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const individualProject = projects.map((project) => (
  <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
  ))
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{individualProject}</div>
      {/* <ProjectItem name={'jacob'} about={'code'} technologies={['react', 'redux']} />
      <ProjectItem name={'jacob'} about={'code'} technologies={['react', 'redux']} />
      <ProjectItem name={'jacob'} about={'code'} technologies={['react', 'redux']} /> */}

    </div>
  );
}


export default ProjectList;
