// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      {/* Ganti 'profile.jpg' dengan nama file foto Anda */}
      <img src="/images/profile.jpg" alt="Foto Profil" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1 className={styles.title}>Yusuf Ramadhan</h1>
        <p className={styles.subtitle}>
          Data Scientist & Machine Learning Enthusiast. Mengubah data menjadi solusi cerdas.
        </p>
        <Link to="/projects" className={styles.ctaButton}>
          Lihat Proyek Saya
        </Link>
      </div>
    </div>
  );
};

export default HomePage;