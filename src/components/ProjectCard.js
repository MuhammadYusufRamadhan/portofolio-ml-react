// src/components/ProjectCard.js (Versi Refactor)
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import styles from './ProjectCard.module.css'; // <-- Impor CSS Module

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.projectImage}/>
      <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.linkContainer}>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaGithub />
            </a>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                <CgWebsite />
              </a>
            )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;