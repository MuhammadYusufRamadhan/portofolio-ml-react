// src/pages/ProjectsPage.js
import React from 'react';
import { projects } from '../projectData.js'; // path '../' artinya keluar satu folder
import ProjectCard from '../components/ProjectCard.js';

const ProjectsPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Proyek-Proyek Saya</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map(projectItem => (
          <ProjectCard key={projectItem.id} project={projectItem} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;