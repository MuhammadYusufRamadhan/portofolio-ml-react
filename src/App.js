// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import komponen layout dan halaman
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage'; 
import Footer from './components/Footer'; // (jika Anda membuat footer)



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} /> {/* <-- 2. TAMBAHKAN ROUTE BARU */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;