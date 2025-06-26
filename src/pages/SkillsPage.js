// src/pages/SkillsPage.js
import React from 'react';
import styles from './SkillsPage.module.css'; // Impor style baru

const SkillsPage = () => {
  const mlLibraries = ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'];
  const webTechnologies = ['React', 'Node.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Python', 'SQL'];

  return (
    <div className="section" id="skills">
      <h2 className="sectionHeading">My Skills</h2>
      <p>Berikut adalah beberapa teknologi yang sering saya gunakan:</p>
      <ul className={styles.skillsList}>
        {mlLibraries.map((skill, i) => <li key={i} className={styles.skillItem}>{skill}</li>)}
        {webTechnologies.map((skill, i) => <li key={i} className={styles.skillItem}>{skill}</li>)}
      </ul>
      <div className={styles.buttonContainer}>
        <a href="/CV_Yusuf_Ramadhan.pdf" download className={styles.button}>
          Download My Full Resume
        </a>
      </div>
    </div>
  );
};

export default SkillsPage;