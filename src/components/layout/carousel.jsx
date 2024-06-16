import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { types } from '../utils/arrays';
import { Box, Button, Card, Typography } from '@mui/joy';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Carousel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    600: { items: 3 },
    1200: { items: 5 },
    1500: { items: 6 },
  };

  const handlePrev = () => {
    carouselRef.current.slidePrev();
  };

  const handleNext = () => {
    carouselRef.current.slideNext();
  };

  const items = types.map((type, index) => (
    <Card
      key={index}
      component={Link}
      to={`/clothes/${type.type.toLowerCase()}`}
      style={{ backgroundImage: `url(${type.img})` }}
      sx={{ ...item }}
    >
      <Typography level="title-lg" sx={{ color: 'neutral.900' }}>
        {type.type}
      </Typography>
    </Card>
  ));

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
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
          left: '10px',
        }}
      >
        <MdKeyboardArrowLeft size={15} />
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          ...arrow,
          right: '10px',
        }}
      >
        <MdKeyboardArrowRight size={15} />
      </Button>
    </Box>
  );
};

const item = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: { xs: '240px', md: '480px' },
  borderRadius: '0px',
  textDecoration: 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  position: 'relative',
  overflow: 'hidden',
  '> *': {
    zIndex: 2,
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1,
  },
  transition: 'background-color 0.3s, transform 0.3s ease, boxShadow 0.3s ease',
  ':hover': {
    transform: 'scale(1.03)',
  },
};

const arrow = {
  height: '36px',
  width: '36px',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: 'primary.darkBlue',
  padding: 1,
  display: 'flex',
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
