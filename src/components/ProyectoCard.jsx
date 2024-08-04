// components/ProyectoCard.js
import React from 'react';

const ProyectoCard = ({ imgSrc, title, description, demoLink, repoLink }) => {
  return (
    <div className="cards--proyectos card_portafolio" data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom">
      <div className="container_imgCard--proyectos">
        <img src={imgSrc} alt={`Proyecto: ${title}`} />
      </div>

      <div className="container_textCard--proyectos text-portafolio">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="container_btn--proyectos">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="btn_demo">
            <img src="/images/icon-demoProyecto.png" alt="Demostración" /> DEMO
          </button>
        </a>

        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <button className="btn_repo">
            <img src="/images/icon-githubProyecto.png" alt="Repositorio de github" /> REPO
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProyectoCard;