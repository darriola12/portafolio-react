// App.js
import React from 'react';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Formacion from './components/Formacion';
import Proyectos from './components/Proyectos';
import Header from './components/Header';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <SobreMi />
        <Habilidades />
        <Formacion />
        <Proyectos />
      </main>
    


      
    </>
  );
};

export default App;
