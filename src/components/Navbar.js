// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// 1. Impor file CSS Module
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    // 2. Gunakan nama kelas dari objek 'styles'
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/projects" className={styles.link}>Projects</Link>
      <Link to="/skills" className={styles.link}>Skills</Link>
    </nav>
  );
};

export default Navbar;