import React from "react";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <h1>Abdulrahman CHAHDI</h1>
        <p>Recherche Alternance - Développeur Fullstack</p>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
