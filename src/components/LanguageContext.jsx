import React, { createContext, useState, useContext, useEffect } from 'react';

// Contexto para el idioma
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); 

  const changeLanguage = async (lang) => {
    const response = await fetch(`/public/scripts/languages/${lang}.json`);
    const texts = await response.json();
    setLanguage(lang);
   
  };

  useEffect(() => {
    changeLanguage(language); 
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);