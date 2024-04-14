import "./ClothesPage.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { types } from "../../components/ClothesInfoArrays";
import AliceCarousel from "react-alice-carousel";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function ClothesPage() {
  // Carousel handlers
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  };

  const handlePrev = () => {
    carouselRef.current.slidePrev();
  };

  const handleNext = () => {
    carouselRef.current.slideNext();
  };

  // Types map
  const items = types.map((type, index) => (
    <Link
      to={`/clothes/${type.toLowerCase()}`}
      key={index}
      className="clothes-carousel-item"
    >
      <h3>{type}</h3>
    </Link>
  ));

  return (
    <div id="page-container" className="clothes-carousel-container">
      <AliceCarousel
        ref={carouselRef}
        items={items}
        responsive={responsive}
        mouseTracking
        infinite
        disableButtonsControls
        disableDotsControls
      />

      <button
        className="clothes-carousel-arrow clothes-carousel-arrow-prev"
        onClick={handlePrev}
      >
        <IoIosArrowDropleft size={30} />
      </button>

      <button
        className="clothes-carousel-arrow clothes-carousel-arrow-next"
        onClick={handleNext}
      >
        <IoIosArrowDropright size={30} />
      </button>
    </div>
  );
}

export default ClothesPage;