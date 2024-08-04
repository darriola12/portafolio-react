// components/Proyectos.js
import React from 'react';
import ProyectoCard from './ProyectoCard';

const proyectosData = [
  {
    id: 1,
    imgSrc: '/images/image-profile1.png',
    title: 'Portafolio',
    description: 'Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación.',
    demoLink: '#',
    repoLink: 'https://github.com/darriola12/portafolio',
  },
  {
    id: 2,
    imgSrc: '/images/image-startup.png',
    title: 'Inventary Car Startup',
    description: 'Aplicacion web creada con el uso de administrar inventario de carros mediante la creacion de usuario',
    demoLink: 'https://cse-340-f9bp.onrender.com/',
    repoLink: 'https://github.com/darriola12/cse_340',
  }
];

const Proyectos = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h1 data-section="proyectos" data-value="title" data-aos="fade-up">Proyectos</h1>

      <img src="/images/puntos.png" alt="Decoración puntos" className="puntos1-proyectos" />
      <img src="/images/puntos.png" alt="Decoración puntos" className="puntos2-proyectos" />

      <div className="cards_container--proyectos">
        {proyectosData.map(proyecto => (
          <ProyectoCard
            key={proyecto.id}
            imgSrc={proyecto.imgSrc}
            title={proyecto.title}
            description={proyecto.description}
            demoLink={proyecto.demoLink}
            repoLink={proyecto.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;