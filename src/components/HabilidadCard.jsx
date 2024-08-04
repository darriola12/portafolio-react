import React from 'react';

const HabilidadCard = ({ imgSrc, alt, name, duration }) => {
  return (
    <div className="cards--habilidades" data-aos="fade-up" data-aos-duration={duration}>
      <img src={imgSrc} alt={alt} />
      <p>{name}</p>
    </div>
  );
};

export default HabilidadCard;