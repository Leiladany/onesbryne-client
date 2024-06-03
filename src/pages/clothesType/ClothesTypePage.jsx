import './ClothesTypePage.css';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataService } from '../../components/services/DataService';
import { ImgComponent } from '../../components/layout/ImgComponent';
import { Button, Card, CardContent, Stack, Typography } from '@mui/joy';
import { AuthContext } from '../../contexts/AuthContext';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';

const ClothesTypePage = () => {
  const { type } = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

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

  // Function to handle if item is favourite
  const handleIsFavourite = () => {
    setIsFavourite((prevIsFavourite) => !prevIsFavourite);
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
          <Card
            key={index}
            sx={{
              background: 'transparent',
              borderColor: 'neutral.700',
              width: { xs: '90%', md: '400px' },
              height: '600px',
            }}
          >
            {isAuthenticated && (
              <Button
                variant="plain"
                onClick={handleIsFavourite}
                color="primary"
                sx={{
                  color: 'primary.main',
                  m: 0,
                  p: 0,
                  position: 'absolute',
                  right: '8%',
                  top: '4%',
                  cursor: 'pointer',
                  zIndex: '2',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }}
                className="clothesType-heart"
              >
                {isFavourite ? (
                  <IoIosHeart size={25} />
                ) : (
                  <IoIosHeartEmpty size={25} />
                )}
              </Button>
            )}

            <Link to={`/clothes/${type}/${product.id}`} key={index}>
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
            </Link>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default ClothesTypePage;
