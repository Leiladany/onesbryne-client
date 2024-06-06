import { Stack } from '@mui/joy';
import { Carousel } from '../components/layout/carousel';

export const ClothesPage = () => {
  return (
    <Stack
      id="container"
      sx={{ position: 'relative', px: 6, mx: { xs: 2, md: 10 } }}
    >
      <Carousel />
    </Stack>
  );
};
