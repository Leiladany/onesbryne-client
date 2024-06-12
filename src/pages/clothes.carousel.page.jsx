import { Carousel } from '../components/layout/carousel';
import { PageContainer } from '../components/layout/containers';

export const ClothesPage = () => {
  return (
    <PageContainer
      sx={{ position: 'relative', px: 6, mx: { xs: 2, md: 10 } }}
    >
      <Carousel />
    </PageContainer>
  );
};
