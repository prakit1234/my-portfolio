// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project 1: Samurai Showdown</h3>
          <p>A 2D action game with dynamic combat and an engaging storyline but failed.</p>
        </div>
        <div className="project">
          <h3>Project 2: Zenoparadox-Arena</h3>
          <p>An offline/online shooting game with fun controls and multiple levels.</p>
        </div>
        <div className="project">
          <h3>Project 3: CloudSapphire</h3>
          <p>A very safe and secure cloud storage website which offers tons of services.</p>
        </div>
        <div className="project">
          <h3>Project 4: DivineGod</h3>
          <p>A website that stores 3 main holy books Gita Quran and Bible , it provides both in pdf and mp3.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
