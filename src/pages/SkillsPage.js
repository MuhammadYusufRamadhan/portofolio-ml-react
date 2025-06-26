// src/pages/SkillsPage.js
import React from 'react';

// Styling sederhana untuk halaman ini
const pageStyle = { padding: '2rem 4rem' };
const sectionStyle = { marginBottom: '2rem' };
const listStyle = { listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' };
const skillStyle = { background: '#f0f0f0', padding: '10px 15px', borderRadius: '5px' };
const buttonStyle = {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
};

const SkillsPage = () => {
  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Keahlian & Teknologi</h1>

      <div style={sectionStyle}>
        <h3>Bahasa Pemrograman</h3>
        <ul style={listStyle}>
          <li style={skillStyle}>Python</li>
          <li style={skillStyle}>JavaScript</li>
          <li style={skillStyle}>SQL</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3>Framework & Library Machine Learning</h3>
        <ul style={listStyle}>
          <li style={skillStyle}>TensorFlow</li>
          <li style={skillStyle}>PyTorch</li>
          <li style={skillStyle}>Scikit-learn</li>
          <li style={skillStyle}>Pandas</li>
          <li style={skillStyle}>NumPy</li>
          <li style={skillStyle}>Matplotlib</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3>Web Development</h3>
        <ul style={listStyle}>
          <li style={skillStyle}>React</li>
          <li style={skillStyle}>Node.js</li>
          <li style={skillStyle}>HTML5 & CSS3</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center' }}>
        {/* Ganti nama file dengan nama file CV Anda */}
        <a href="/CV_Yusuf_Ramadhan.pdf" download style={buttonStyle}>
          Download CV Saya
        </a>
      </div>
    </div>
  );
};

export default SkillsPage;