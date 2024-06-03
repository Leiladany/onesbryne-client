import './ClothesPage.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { types } from '../../components/utils/Arrays';
import AliceCarousel from 'react-alice-carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Stack } from '@mui/joy';

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
      to={`/clothes/${type.type.toLowerCase()}`}
      key={index}
      className="clothes-carousel-item"
      style={{ backgroundImage: `url(${type.img})` }}
    >
      <div className="clothes-carousel-item-content">
        <h3>{type.type}</h3>
      </div>
    </Link>
  ));

  return (
    <Stack
      id="container"
      className="clothes-carousel-container"
      sx={{ mx: { xs: 2, md: 10 } }}
    >
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
        <FaArrowLeft size={20} />
      </button>

      <button
        className="clothes-carousel-arrow clothes-carousel-arrow-next"
        onClick={handleNext}
      >
        <FaArrowRight size={20} />
      </button>
    </Stack>
  );
}

export default ClothesPage;
