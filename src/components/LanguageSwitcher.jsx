import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div id="flags">
      <img
        src="/images/flag-en.png"
        alt="English"
        onClick={() => changeLanguage('en')}
        style={{ cursor: 'pointer' }}
      />
      <img
        src="/images/flag-es.png"
        alt="Español"
        onClick={() => changeLanguage('es')}
        style={{ cursor: 'pointer' }}
      />
      {/* Agrega más banderas según sea necesario */}
    </div>
  );
};

export default LanguageSwitcher;