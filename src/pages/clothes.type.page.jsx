import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataService } from '../components/services/data-service';
import {
  Stack,
  Typography,
  CircularProgress,
} from '@mui/joy';
import { ClothesCard } from '../components/layout/clothes-card';
import { PageContainer } from '../components/layout/containers';

export const ClothesTypePage = () => {
  const { type } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await DataService.fetchData('/api/products');
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

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <PageContainer sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h3">{type.toUpperCase()}</Typography>

      {isLoading ? (
        <CircularProgress variant="plain" color="neutral" />
      ) : (
        <Stack
          sx={{
            width: '100%',
            display: "grid",
            gridTemplateColumns: {xs: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr"},
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
