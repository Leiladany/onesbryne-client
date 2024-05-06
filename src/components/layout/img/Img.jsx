import React from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const ImgComponent = ({ src, alt, className, width, height, cover }) => {
  const imgStyle = cover ? { objectFit: 'cover' } : {};

  return (
    <img
      src={src.startsWith('http') ? src : `${API_URL}/${src}`}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={imgStyle}
    />
  );
};

export default ImgComponent;
