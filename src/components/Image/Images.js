import React from 'react';
import './Images.css';

const Images = ({ size }) => {
  const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  return (
    <img
      className={`image-component ${sizes[size]}`}
      src="https://via.placeholder.com/150"
      alt="Placeholder"
    />
  );
};

export default Images;