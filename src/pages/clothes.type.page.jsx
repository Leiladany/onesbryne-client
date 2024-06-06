import './clothes.type.page.css';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataService } from '../components/services/data-service';
import { Card, CardContent, Stack, Typography } from '@mui/joy';

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
          <Link to={`/clothes/${type}/${product.id}`} key={index}>
            <Card
              key={index}
              sx={{
                background: 'transparent',
                borderColor: 'neutral.700',
                width: { xs: '90%', md: '400px' },
                height: '600px',
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="clothesType-img"
              />

              <CardContent orientation="horizontal">
                <Typography level="body-md">{product.name}</Typography>
                <Typography level="body-md">{product.price} €</Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};
