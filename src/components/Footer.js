// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';
// Impor ikon yang dibutuhkan
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {/* Ganti dengan link profil Anda */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaLinkedin />
        </a>
        {/* Link mailto akan membuka aplikasi email default */}
        <a href="mailto:emailanda@example.com" className={styles.socialIcon}>
          <FaEnvelope />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Yusuf Ramadhan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;