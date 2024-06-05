import { Card, CardContent, Stack, Typography } from '@mui/joy';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { DataService } from '../../components/services/DataService';
import { ImgComponent } from '../../components/layout/ImgComponent';
import { Link } from 'react-router-dom';

const FavouritesPage = () => {
  const { userId } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (userId) {
      getUserFavouriteProducts(userId);
    }
  }, [userId]);

  // Function to fetch favourite products
  const getUserFavouriteProducts = async (userId) => {
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
    }
  };

  return (
    <Stack id="container" sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h3">My favourites</Typography>

      <Stack
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {products.map((product, index) => (
          <Link to={`/clothes/${product.type}/${product.id}`} key={index}>
            <Card
              key={index}
              sx={{
                background: 'transparent',
                borderColor: 'neutral.700',
                width: { xs: '90%', md: '400px' },
                height: '600px',
              }}
            >
              <ImgComponent
                src={product.img}
                alt={product.name}
                className="clothesType-img"
              />

              <CardContent orientation="horizontal">
                <Stack
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography level="body-md">{product.name}</Typography>
                  <Typography level="body-md" sx={{ textAlign: 'end' }}>
                    {product.price} €
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default FavouritesPage;
