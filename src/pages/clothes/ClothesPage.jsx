import "./ClothesPage.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

import iconArrowRight from "../../assets/arrow-right.png";
import iconArrowLeft from "../../assets/arrow-left.png";

function ClothesPage() {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  };

  // Carousel handlers
  const handlePrev = () => {
    carouselRef.current.slidePrev();
  };

  const handleNext = () => {
    carouselRef.current.slideNext();
  };

  // Categories to map trough
  const categories = [
    "Tops",
    "T-Shirts",
    "Vestidos",
    "Calças",
    "Casacos",
    "Pijamas",
    "Desporto",
    "Macacões",
    "Bikinis",
  ];

  // Categories map
  const items = categories.map((category, index) => (
    <Link
      to={`/clothes/${category.toLowerCase()}`}
      key={index}
      className="carousel-item"
    >
      <h3>{category}</h3>
    </Link>
  ));

  return (
    <div>
      <div className="carousel-container">
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          infinite
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          items={items}
        />

        <button className="prev" onClick={handlePrev}>
          <img src={iconArrowLeft} alt="Arrow Left" />
        </button>

        <button className="next" onClick={handleNext}>
          <img src={iconArrowRight} alt="Arrow Right" />
        </button>
      </div>
    </div>
  );
}

export default ClothesPage;
