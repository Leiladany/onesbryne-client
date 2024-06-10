import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataService } from '../components/services/data-service';
import { Stack, Typography, Skeleton, Card, CardCover } from '@mui/joy';
import { ClothesCard } from '../components/layout/clothes-card';

export const ClothesTypePage = () => {
  const { type } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Function to fetch all the products
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

  // Function to filter products
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => product.type.toLowerCase() === type.toLowerCase(),
    );
  }, [products, type]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Stack id="container" sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h3">{type.toUpperCase()}</Typography>

      <Stack
        sx={{
          width: '100%',
          flexDirection: { xs: 'column', lg: 'row' },
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {isLoading
          ? Array.from(new Array(9)).map((_, index) => (
              <Card
                key={index}
                sx={{
                  background: 'transparent',
                  borderColor: 'neutral.700',
                  width: { md: '400px' },
                  height: '600px',
                  justifyContent: 'flex-end',
                }}
              >
                <CardCover>
                  <Skeleton variant="rectangular" width={400} height={600} />
                </CardCover>
              </Card>
            ))
          : filteredProducts.map((product, index) => (
              <ClothesCard key={index} product={product} />
            ))}
      </Stack>
    </Stack>
  );
};
