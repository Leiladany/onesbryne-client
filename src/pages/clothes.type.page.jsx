import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataService } from '../components/services/data-service';
import { Stack, Typography, CircularProgress } from '@mui/joy';
import { ClothesCard } from '../components/layout/clothes-card';
import { PageContainer } from '../components/layout/containers';

export const ClothesTypePage = () => {
  const { type } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await DataService.getData('/api/products/status/available');
      if (response) {
        setProducts(response);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => product.type.toLowerCase() === type.toLowerCase(),
    );
  }, [products, type]);

  return (
    <PageContainer sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h3">{type.toUpperCase()}</Typography>

      {isLoading ? (
        <CircularProgress variant="plain" color="neutral" />
      ) : (
        <Stack
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr);',
              md: 'repeat(3, 1fr);',
              lg: 'repeat(4, 1fr);',
            },
            rowGap: 4,
            columnGap: 1,
          }}
        >
          {filteredProducts.map((product, index) => (
            <ClothesCard key={index} product={product} />
          ))}
        </Stack>
      )}
    </PageContainer>
  );
};
