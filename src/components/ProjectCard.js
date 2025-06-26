// src/components/ProjectCard.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import styles from './ProjectCard.module.css';
import { useInView } from 'react-intersection-observer'; // <-- 1. IMPORT

const ProjectCard = ({ project }) => {
  // 2. SETUP HOOK
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.1,    // Muncul saat 10% kartu terlihat
  });

  return (
    // 3. TERAPKAN REF DAN CLASS KONDISIONAL
    <div ref={ref} className={`${styles.card} ${inView ? styles.visible : ''}`}>
      <img src={project.image} alt={project.title} className={styles.projectImage}/>
      <div className={styles.content}>
          {/* ...sisa konten kartu Anda... */}
      </div>
    </div>
  );
};

export default ProjectCard;