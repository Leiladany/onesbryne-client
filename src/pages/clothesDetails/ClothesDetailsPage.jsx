import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/layout/button/Button';
import DataService from '../../components/services/DataService';
import ImgComponent from '../../components/layout/img/Img';
import { Stack, Typography } from '@mui/joy';

const ClothesDetailsPage = () => {
  const { productId } = useParams();

  // State
  const [product, setProduct] = useState();

  // Function to fetch the product
  const fetchProduct = async () => {
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

  useEffect(() => {
    fetchProduct();
  }, [productId]);

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
            <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
              <ImgComponent src={product.img} alt={product.name} />
            </Stack>
          </Stack>

          <Stack sx={{ width: { xs: '100%', md: '50%' }, gap: 2 }}>
            <Typography>{product.code}</Typography>

            <Stack
              sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
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
              <Button children="Contactar" />
            </div>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default ClothesDetailsPage;
