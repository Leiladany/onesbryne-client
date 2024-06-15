import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { DataService } from '../components/services/data-service';
import { Stack, Typography, Button, CircularProgress, Box } from '@mui/joy';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import {
  errorToast,
  favouritesToast,
  contactToast,
} from '../components/utils/toasts';
import { PageContainer } from '../components/layout/containers';

export const ClothesDetailsPage = () => {
  const { productId } = useParams();
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [product, setProduct] = useState();
  const [userFavourites, setUserFavourites] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoadingFavourite, setIsLoadingFavourite] = useState(false);

  useEffect(() => {
    if (userId) {
      getUserById();
    } else {
      setIsLoadingUser(false);
    }
  }, [userId]);

  useEffect(() => {
    if (productId) {
      getProductById();
    } else {
      setIsLoadingProduct(false);
    }
  }, [productId]);

  useEffect(() => {
    if (!isLoadingProduct && !isLoadingUser) {
      setIsLoading(false);
    }
  }, [isLoadingProduct, isLoadingUser]);

  useEffect(() => {
    if (productId && userFavourites.includes(productId)) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [userFavourites]);

  const getProductById = async () => {
    setIsLoadingProduct(true);
    try {
      const response = await DataService.fetchData(
        `/api/products/${productId}`,
      );
      if (response) {
        setProduct(response);
      }
    } catch (error) {
      errorToast('Error fetching product data');
    } finally {
      setIsLoadingProduct(false);
    }
  };

  const getUserById = async () => {
    setIsLoadingUser(true);
    try {
      const userData = await DataService.fetchData(`/api/users/${userId}`);
      if (userData.user.favourites) {
        setUserFavourites(userData.user.favourites);
      } else {
        setUserFavourites([]);
      }
    } catch (error) {
      errorToast('Error fetching user data');
    } finally {
      setIsLoadingUser(false);
    }
  };

  const addProductToUserFavourites = async () => {
    setIsLoadingFavourite(true);
    try {
      await DataService.updateData(
        `/api/users/${userId}/favourites`,
        { productId: productId },
        'PUT',
      );
      setIsFavourite(!isFavourite);
      favouritesToast.success();
    } catch (error) {
      errorToast(error);
    } finally {
      setIsLoadingFavourite(false);
    }
  };

  const handleContact = async () => {
    try {
      if (isAuthenticated) {
        contactToast.success();
      } else {
        contactToast.warning();
      }
    } catch (error) {
      errorToast(error);
    }
  };

  return (
    <PageContainer sx={{ mx: { xs: 2, md: 10 }, gap: 4 }}>
      {isLoading ? (
        <CircularProgress variant="plain" color="neutral" />
      ) : (
        <>
          <Typography level="h4">{product.name}</Typography>

          <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Stack sx={{ width: '300px', position: 'relative' }}>
              {isAuthenticated && (
                <Button
                  variant="plain"
                  color="neutral"
                  onClick={addProductToUserFavourites}
                  loading={isLoadingFavourite}
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'neutral.100',
                    m: 0,
                    p: 1,
                    position: 'absolute',
                    right: '4%',
                    top: '2%',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '50%',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'neutral.100',
                    },
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

            <Stack sx={{ width: '300px', alignItems: 'center', gap: 4 }}>
              <Stack sx={{ alignItems: 'center', gap: 2 }}>
                <Typography
                  startDecorator={<Typography>#{product.code}</Typography>}
                  sx={{width: "100%"}}
                >
                  {product.name}
                </Typography>
                <Typography>{product.price}€</Typography>
                <Typography>{product.size}</Typography>
              </Stack>

              <Typography sx={{ textAlign: 'justify' }}>
                {product.description}
              </Typography>
              <Stack>
                <Button onClick={handleContact}>Contactar</Button>
              </Stack>
            </Stack>
          </Stack>
        </>
      )}
    </PageContainer>
  );
};
