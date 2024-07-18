import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import MySkills from './components/MySkills.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/my-skills" element={<MySkills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
