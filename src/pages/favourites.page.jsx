import { Stack, Typography, CircularProgress } from '@mui/joy';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { DataService } from '../components/services/data-service';
import { ClothesCard } from '../components/layout/clothes-card';

export const FavouritesPage = () => {
  const { userId } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (userId) {
      getUserFavouriteProducts(userId);
    }
  }, [userId]);

  const getUserFavouriteProducts = async (userId) => {
    setIsLoading(true);
    try {
      const userData = await DataService.fetchData(`/api/users/${userId}`);
      if (userData.user.favourites) {
        const userFavourites = userData.user.favourites;
        const response = await DataService.fetchData('/api/products');
        if (response) {
          const filteredProducts = response.filter((product) =>
            userFavourites.includes(product.id),
          );
          setProducts(filteredProducts);
        }
      }
    } catch (error) {
      console.error('Error fetching favourite products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack id="container" sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h4">Favoritos</Typography>

      {isLoading ? (
        <CircularProgress variant='plain' color='neutral' />
      ) : !products.length > 0 ? (
        <Typography level="body-sm">sem roupa nos favoritos</Typography>
      ) : (
        <Stack
          sx={{
            width: '100%',
            flexDirection: { xs: 'column', lg: 'row' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          {products.map((product, index) => (
            <ClothesCard key={index} product={product} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};
