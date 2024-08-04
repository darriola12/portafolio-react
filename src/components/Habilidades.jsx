import React from 'react';
import HabilidadCard from './HabilidadCard';

const habilidadesData = [
  { id: 1, imgSrc: '/images/icon-html.png', alt: 'HTML', name: 'HTML 5', duration: '500' },
  { id: 2, imgSrc: '/images/icon-css.png', alt: 'CSS', name: 'CSS 3', duration: '700' },
  { id: 3, imgSrc: '/images/icon-js.png', alt: 'JavaScript', name: 'JavaScript', duration: '900' },
  { id: 4, imgSrc: '/images/icon-c.png', alt: 'C#', name: 'C#', duration: '1100' },
  { id: 5, imgSrc: '/images/icon-python.png', alt: 'Python', name: 'Python', duration: '700' },
  { id: 6, imgSrc: '/images/icon-sql.png', alt: 'SQL', name: 'SQL', duration: '700' },
  { id: 7, imgSrc: '/images/icon-github-hab.png', alt: 'GitHub', name: 'Github', duration: '900' },
];

const Habilidades = () => {
  return (
    <section className="habilidades" id="habilidades">
      <h1 data-section="habilidades" data-value="title" data-aos="fade-up">Habilidades</h1>

      <img src="/images/puntos.png" alt="Decoración puntos" className="puntos1-habilidades" />
      <img src="/images/puntos.png" alt="Decoración puntos" className="puntos2-habilidades" />

      <div className="cards_container--habilidades">
        {habilidadesData.map(habilidad => (
          <HabilidadCard
            key={habilidad.id}
            imgSrc={habilidad.imgSrc}
            alt={habilidad.alt}
            name={habilidad.name}
            duration={habilidad.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default Habilidades;