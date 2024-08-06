import React from 'react';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Formacion from './components/Formacion';
import Proyectos from './components/Proyectos';
import Header from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext'; // Asegúrate de que el contexto esté correctamente importado

const App = () => {
  return (
    <LanguageProvider> {/* Proporciona el contexto de idioma */}
      <Header />
      <main>
        <Home />
        <SobreMi />
        <Habilidades />
        <Formacion />
        <Proyectos />
      </main>
    </LanguageProvider>
  );
};

export default App;