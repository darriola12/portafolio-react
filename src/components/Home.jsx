// components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <picture className="container_image-home" data-aos="zoom-in">
        <img className="image_home" src="/images/image_workking1.png" alt="working1" />
      </picture>
      
      <div className="home_info">
        <div className="container_text-info">
          <p className="home_text-1" data-section="home" data-value="home_text-1">Hola! Soy</p>
          <p className="home_text-2">Diego Arriola</p>
        </div>

        <div>
          <p className="home_text-3 text-type" data-section="home" data-value="home_text-3">Desarrollador web Front-End</p>
        </div>

        <div className="container_parrafo-info">
          <p data-section="home" data-value="parrafo-info">Actualmente estoy estudiando Desarrollo de Software, soy un amante de la progromacion con el obetivo de crear proyectos que den la mejor calidad de interaccion al usuario.</p>
        </div>

        <div className="container_button">
          <a href="#contacto">
            <button className="contact_button" data-section="home" data-value="contact_button">Contacto</button>
          </a>
        </div>
      </div>

      <div className="links">
        <a href="https://www.linkedin.com/in/diego-arriola-b733612a0/" target="_blank" rel="noopener noreferrer">
          <img src="/images/icon-linkedin.png" alt="LinkedIn" className="icon-linkedin" />
        </a>
        <a href="https://github.com/darriola12" target="_blank" rel="noopener noreferrer">
          <img src="/images/icon-github.png" alt="GitHub" className="icon-github" />
        </a>
        <a href="https://www.instagram.com/mar.am0410/?next=%2F" target="_blank" rel="noopener noreferrer">
          <img src="/images/icon-instagram.png" alt="Instagram" className="icon-instagram" />
        </a>
      </div>
    </section>
  );
};

export default Home;
