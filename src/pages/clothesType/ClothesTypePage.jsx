import './ClothesTypePage.css';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataService from '../../components/services/DataService';
import Img from '../../components/layout/ImgComponent';

import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/joy';

const ClothesTypePage = () => {
  const { type } = useParams();

  // States
  const [products, setProducts] = useState([]);
  const [starClicked, setStarClicked] = useState({});

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
  const handleIfFavourite = (index) => {
    setStarClicked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
              <Img
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

export default ClothesTypePage;
