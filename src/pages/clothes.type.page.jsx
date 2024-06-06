import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataService } from '../components/services/data-service';
import { Stack, Typography } from '@mui/joy';
import { ClothesCard } from '../components/layout/clothes-card';

export const ClothesTypePage = () => {
  const { type } = useParams();
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
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {filteredProducts.map((product, index) => (
          <ClothesCard key={index} product={product} />
        ))}
      </Stack>
    </Stack>
  );
};
