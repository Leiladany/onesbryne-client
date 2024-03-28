import "./Clothes.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

function AllClothes() {
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
          <img src="/prev.png" alt="Previous" />
        </button>

        <button className="next" onClick={handleNext}>
          <img src="/next.png" alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default AllClothes;
