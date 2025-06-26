// src/pages/ProjectsPage.js
import React from 'react';
import { projects } from '../projectData.js';
import ProjectCard from '../components/ProjectCard.js';

const ProjectsPage = () => {
  return (
    // Gunakan className 'section' dari App.css
    <div className="section" id="projects"> 
      {/* Gunakan className 'sectionHeading' dari App.css */}
      <h2 className="sectionHeading">
        Some Things I've Built
      </h2>
      <div className="projectList"> 
        {projects.map(projectItem => (
          <ProjectCard key={projectItem.id} project={projectItem} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;