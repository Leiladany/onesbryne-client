import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { DataService } from '../components/services/data-service';
import { Stack, Typography, Button } from '@mui/joy';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';

export const ClothesDetailsPage = () => {
  const { productId } = useParams();
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [product, setProduct] = useState();
  const [userFavourites, setUserFavourites] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoadingFavourite, setisLoadingFavourite] = useState(true);

  useEffect(() => {
    if (userId) {
      getUserById();
    }
  }, [userId]);

  useEffect(() => {
    if (productId) {
      getProductById();
    }
  }, [productId]);

  useEffect(() => {
    if (productId && userFavourites.includes(productId)) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [userFavourites]);

  // Function to fetch product by id
  const getProductById = async () => {
    try {
      const response = await DataService.fetchData(
        `/api/products/${productId}`,
      );
      if (response) {
        setProduct(response);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to fetch user by id
  const getUserById = async () => {
    try {
      const userData = await DataService.fetchData(`/api/users/${userId}`);
      if (userData.user.favourites) {
        setUserFavourites(userData.user.favourites);
        setisLoadingFavourite(false);
      } else {
        setUserFavourites([]);
        setisLoadingFavourite(false);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  // Function to add product to user favorites
  const addProductToUserFavourites = async () => {
    try {
      await DataService.updateData(
        `/api/users/${userId}/favourites`,
        { productId: productId },
        'PUT',
      );

      setIsFavourite(!isFavourite);
    } catch (error) {
      console.error('Error adding product to favorites:', error);
    }
  };

  return (
    <>
      {!product ? (
        <p>Loading...</p>
      ) : (
        <Stack
          id="container"
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            mx: { xs: 2, md: 10 },
            gap: 4,
          }}
        >
          <Stack sx={{ width: '50%', alignItems: 'center' }}>
            <Stack
              sx={{ width: { xs: '100%', md: '50%', position: 'relative' } }}
            >
              {isAuthenticated && (
                <Button
                  variant="plain"
                  onClick={addProductToUserFavourites}
                  color="primary"
                  loading={isLoadingFavourite}
                  sx={{
                    bgcolor: "primary.maint",
                    color: 'neutral.100',
                    m: 0,
                    p: 1,
                    position: 'absolute',
                    right: '4%',
                    top: '2%',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: "50%",
                    '&:hover': {
                      bgcolor: "primary.maint",
                      color: 'neutral.100'
                    }
                  }}
                >
                  {isFavourite ? (
                    <IoIosHeart size={25} />
                  ) : (
                    <IoIosHeartEmpty size={25} />
                  )}
                </Button>
              )}

              <img src={product.img[0]} alt={product.name} />
            </Stack>
          </Stack>

          <Stack sx={{ width: { xs: '100%', md: '50%' }, gap: 2 }}>
            <Typography>#{product.code}</Typography>

            <Stack sx={{ flexDirection: 'row', gap: 2 }}>
              <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                <Typography>{product.name}</Typography>
                <Typography>{product.price}€</Typography>
              </Stack>
              <Typography>{product.size}</Typography>
            </Stack>

            <Typography sx={{ textAlign: 'justify' }}>
              {product.description}
            </Typography>
            <div>
              <Button>Contactar</Button>
            </div>
          </Stack>
        </Stack>
      )}
    </>
  );
};
