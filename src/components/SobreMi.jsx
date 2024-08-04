// components/SobreMi.js
import React from 'react';

const SobreMi = () => {
  return (
    <section className="sobreMi" id="sobreMi">
      <h1 data-section="sobre-mi" data-value="title" data-aos="fade-up">Sobre mí</h1>

      <div className="container_content-sobreMi" data-aos="fade-right">
        <div className="container_texto-sobreMi">
          <span className="texto_sobreMi" data-section="sobre-mi" data-value="texto_sobreMi">
            Soy estudiante del programa de estudio de BYU-IDAHO, en donde estoy cursando por un bachiller en Ingeniería en Software. 
            Mi fascinación por la programación va más allá de la simple escritura de código; disfruto transformando ideas en soluciones prácticas y funcionales. 
            Estoy comprometido con el desarrollo constante y ansío contribuir al mundo de la tecnología con soluciones innovadoras y eficientes.
          </span>
        </div>

        <picture className="container_image-sobreMi">
          <img className="image_sobreMi" src="/images/image-profile.png" alt="Ilustración mujer y café" />
        </picture>
      </div>
    </section>
  );
};

export default SobreMi;
