import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projets Réalisés</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Projet 1</h3>
            <p>Un projet simple avec PHP et MySQL...</p>
          </div>
          <div className="project-card">
            <h3>Projet 2</h3>
            <p>Application de gestion des tâches avec React.</p>
          </div>
          <div className="project-card">
            <h3>Réseau Social - Tennis</h3>
            <p>Développement d'un réseau social en Laravel...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
