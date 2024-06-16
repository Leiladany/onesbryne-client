import { Box, Stack } from '@mui/joy';
import { Carousel } from '../components/layout/carousel';
import gil1 from '../assets/temp-gil-1.png';
import gil2 from '../assets/temp-gil-2.png';

export const HomePage = () => {
  const img = [
    { src: gil1, alt: 'gil1' },
    { src: gil2, alt: 'gil2' },
  ];

  return (
    <Stack sx={{ gap: { xs: 1, lg: 3 } }}>
      <Stack
        sx={{
          width: '100%',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
        }}
      >
        {img.map((img, index) => (
          <Box
            key={index}
            sx={{ width: '100%', height: { xs: 'auto', lg: '600px' } }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Stack>

      <Carousel />
    </Stack>
  );
};
