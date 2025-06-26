// src/pages/HomePage.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.hero}>
            <p className={styles.greeting}>Hi, nama saya</p>
            <h1 className={styles.name}>Yusuf Ramadhan.</h1>
            <h2 className={styles.subtitle}>
                <TypeAnimation
                    sequence={[
                        // Kalimat yang sama akan tetap ditampilkan
                        'Saya membangun model Machine Learning.',
                        1000, // Jeda 1 detik
                        'Saya membangun aplikasi web.',
                        1000,
                        'Saya mengubah data menjadi insight.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h2>
            <p className={styles.description}>
                Saya adalah seorang praktisi data dari Malang dengan spesialisasi dalam membangun model prediktif dan solusi AI. Saat ini, saya fokus pada eksplorasi deep learning dan penerapannya di dunia nyata.
            </p>
            <div>
                {/* Ganti dengan alamat email Anda */}
                <a href="mailto:muhammadyusuframadhan@example.com" className={styles.button}>
                    Hubungi Saya
                </a>
            </div>
        </div>
    );
};

export default HomePage;