// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    // 1. Buat state untuk melacak status scroll
    const [scrolled, setScrolled] = useState(false);

    // 2. Buat fungsi untuk menangani perubahan saat scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) { // Jika scroll lebih dari 50px
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // 3. Tambahkan event listener saat komponen di-mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // 4. Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 5. Terapkan class 'scrolled' secara kondisional
    let navbarClasses = [styles.nav];
    if (scrolled) {
        navbarClasses.push(styles.scrolled);
    }

    return (
        <nav className={navbarClasses.join(' ')}>
            <a href="/" className={styles.logo}>YR</a> {/* Ganti dengan inisial Anda */}
            <div className={styles.links}>
                <Link to="/#projects" className={styles.link}>Projects</Link>
                <Link to="/#skills" className={styles.link}>Skills</Link>
                <a href="/CV_Yusuf_Ramadhan.pdf" download className={styles.resumeButton}>Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;