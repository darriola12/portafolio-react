import React from 'react';
import flagSpain from '../assets/icon-spain.png';
import flagEn from '../assets/icon-en.png';
import HamburgerButton from './HamburgerButton'; // Importa el nuevo componente

const Header = () => {
  return (
    <header className="header">
      {/* Navegación */}
      <nav className="nav_menu not-active">
        <a href="#home" className="active">Home</a>
        <a href="#sobreMi" data-section="menu" data-value="item2">Sobre mí</a>
        <a href="#habilidades" data-section="menu" data-value="item3">Habilidades</a>
        <a href="#formacion" data-section="menu" data-value="item4">Formación</a>
        <a href="#proyectos" data-section="menu" data-value="item5">Proyectos</a>
        <a href="#contacto" data-section="menu" data-value="item6">Contacto</a>

        {/* Idiomas de la página */}
        <div id="flags" className="flags">
          <div className="flags__item" data-language="es">
            <img src={flagSpain} alt="Español/Spain" />
          </div>
          <div className="flags__item" data-language="en">
            <img src={flagEn} alt="Inglés/English" />
          </div>
        </div>
      </nav>

      {/* Botón de menú */}
      <HamburgerButton />
    </header>
  );
};

export default Header;