const API_URL = import.meta.env.VITE_API_URL;

const ImgComponent = ({ src, alt, className }) => {
  return (
    <img
      src={src.startsWith("http") ? src : `${API_URL}/${src}`}
      alt={alt}
      className={className}
    />
  );
};

export default ImgComponent;
