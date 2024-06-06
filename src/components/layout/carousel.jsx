import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { types } from '../utils/arrays';
import { Box, Button } from '@mui/joy';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Carousel = () => {
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
    <Box
    component={Link}
      to={`/clothes/${type.type.toLowerCase()}`}
      key={index}
      style={{ backgroundImage: `url(${type.img})` }}
      sx={{ ...item }}
    >
      <Box sx={{ ...itemContent }}>
        <h3>{type.type}</h3>
      </Box>
    </Box>
  ));

  return (
    <>
      <AliceCarousel
        ref={carouselRef}
        items={items}
        responsive={responsive}
        mouseTracking
        infinite
        disableButtonsControls
        disableDotsControls
      />

      <Button
        onClick={handlePrev}
        sx={{
          ...arrow,
          left: '0px',
        }}
      >
        <MdKeyboardArrowLeft size={20} />
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          ...arrow,
          right: '0px',
        }}
      >
        <MdKeyboardArrowRight size={20} />
      </Button>
    </>
  );
};

const item = {
  backgroundColor: 'lightgrey',
  color: 'black',
  margin: '0 1rem',
  height: '30rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  textDecoration: 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'background-color 0.3s, transform 0.3s ease, boxShadow 0.3s ease',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    transform: 'scale(1.03)',
  },
};

const itemContent = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '1rem',
};

const arrow = {
  bgcolor: 'primary.darkBlue',
  padding: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  position: 'absolute',
  top: '50%',
  border: 'none',
  cursor: 'pointer',
  transform: 'translateY(-50%)',
  transition: 'background-color 0.3s',
  zIndex: '1000',
  '&:hover': {
    bgcolor: 'gray',
  },
};