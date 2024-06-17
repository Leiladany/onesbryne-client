import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { DataService } from '../components/services/data-service';
import {
  Stack,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardCover,
  Box,
  Divider,
} from '@mui/joy';
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
      const response = await DataService.getData(`/api/products/${productId}`);
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
      const userData = await DataService.getData(`/api/users/${userId}`);
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
      await DataService.putData(
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
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: { xs: 'center', lg: 'flex-start' },
              width: '100%',
              flexDirection: { xs: 'column', lg: 'row' },
              gap: 4,
            }}
          >
            <Stack
              sx={{
                width: { xs: '100%', lg: '50%' },
                alignItems: { xs: 'center', lg: 'flex-end' },
              }}
            >
              <Card
                sx={{
                  background: 'transparent',
                  borderColor: 'neutral.700',
                  height: '600px',
                  width: { xs: '100%', sm: '450px' },
                  borderRadius: 0,
                }}
              >
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
                      zIndex: 2,
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

                <CardCover>
                  <img src={product.img[0]} alt={product.name} />
                </CardCover>
              </Card>
            </Stack>

            <Stack
              sx={{
                width: { xs: '100%', lg: '50%' },
                alignItems: { xs: 'center', lg: 'flex-start' },
                gap: 4,
              }}
            >
              <Stack
                sx={{
                  width: { xs: '100%', sm: '450px' },
                  height: '600px',
                  gap: 4,
                }}
              >
                <Stack sx={{ gap: 1 }}>
                  <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                    <Typography level="title-lg">#{product.code}</Typography>
                    <Divider orientation="vertical" />
                    <Typography level="title-lg">{product.name}</Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-md">{product.size}</Typography>
                  </Stack>
                  <Typography level="title-md">{product.price}€</Typography>
                </Stack>

                <Stack>
                  <Typography level="title-sm">
                    Descrição do produto:
                  </Typography>
                  <Typography level="body-sm" sx={{ textAlign: 'justify' }}>
                    {product.description}
                  </Typography>
                </Stack>

                <Box>
                  <Button
                    sx={{ width: { xs: '100%', lg: 'auto' } }}
                    onClick={handleContact}
                  >
                    Contactar o vendedor
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </>
      )}
    </PageContainer>
  );
};
