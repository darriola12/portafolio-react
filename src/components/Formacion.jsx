// components/Formacion.js
import React from 'react';

const Formacion = () => {
  return (
    <section className="formacion" id="formacion">
      <h1 data-section="formacion" data-value="title" data-aos="fade-up">Formación</h1>

      <div className="cards_container--formacion">
        <div className="cards--formacion" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
          <img className="logo-UCR" src="/images/icon-ucr.png" alt="logo-UCR" />
          <div className="container_texto--formacion">
            <p data-section="formacion" data-value="formacion1">Universidad De Costa Rica</p>
            <p data-section="formacion" data-value="tiempo-formacion1">2019</p>
          </div>
        </div>

        <div className="cards--formacion" data-aos="fade-up" data-aos-duration="500">
          <img className="logo-Pathway" src="/images/icon-byupathway.png" alt="logo-Pathway" />
          <div className="container_texto--formacion">
            <p data-section="formacion" data-value="formacion2">Curso de Preparacion de Ingles</p>
            <p data-section="formacion" data-value="tiempo-formacion2">2019 - 2020</p>
          </div>
        </div>

        <div className="cards--formacion" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
          <img className="logo-BYU" src="/images/icon-byu.png" alt="logo-BYU" />
          <div className="container_texto--formacion">
            <p data-section="formacion" data-value="formacion3">Bachiller en Ingeniería de Software</p>
            <p>2023 - en curso</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
