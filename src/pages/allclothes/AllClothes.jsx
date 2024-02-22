import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from "../../components/Navbar/Navbar";
import "./AllClothes.css";
import Footer from "../../components/Footer/Footer";

function AllClothes() {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  };

  const items = [
    <div key={1} className="carousel-item">
      <h3>Tops</h3>
    </div>,
    <div key={2} className="carousel-item">
      <h3>T-Shirts</h3>
    </div>,
    <div key={3} className="carousel-item">
      <h3>Vestidos</h3>
    </div>,
    <div key={4} className="carousel-item">
      <h3>Calças</h3>
    </div>,
    <div key={5} className="carousel-item">
      <h3>Casacos</h3>
    </div>,
    <div key={6} className="carousel-item">
      <h3>Pijamas</h3>
    </div>,
    <div key={7} className="carousel-item">
      <h3>Desporto</h3>
    </div>,
    <div key={8} className="carousel-item">
      <h3>Macacões</h3>
    </div>,
    <div key={9} className="carousel-item">
      <h3>Bikinis</h3>
    </div>,
  ];

  const handlePrev = () => {
    carouselRef.current.slidePrev();
  };

  const handleNext = () => {
    carouselRef.current.slideNext();
  };

  return (
    <div>
      <Navbar />
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
          <img src="/prev.png" alt="Next" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AllClothes;
