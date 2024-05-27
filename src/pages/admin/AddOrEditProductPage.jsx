/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormComponent from '../../components/layout/FormComponent';
import DataService from '../../components/services/DataService';
import { types, sizes, statuses } from '../../components/utils/Arrays';
import { Stack } from '@mui/joy';

const AddOrEditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // States
  const [productData, setProductData] = useState({});
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  // Function to create a product
  const handleSubmitCreate = async (e) => {
    e.preventDefault();

    const product = {
      name,
      img,
      size,
      price,
      description,
      type,
      status,
    };

    try {
      const response = await DataService.createData('/api/products', product);
      if (response) {
        navigate('/admin');
      }
    } catch (error) {
      setError('Failed to create product. Please try again.');
    }
  };

  // Function to fetch a product
  const fetchProduct = async () => {
    try {
      const response = await DataService.fetchData(
        `/api/products/${productId}`,
      );
      if (response) {
        setProductData(response);
        setName(response.name);
        setImg(response.img);
        setSize(response.size);
        setPrice(response.price);
        setDescription(response.description);
        setType(response.type);
        setStatus(response.status);
      }
    } catch (error) {
      setError('Failed to fetch product. Please try again.');
    }
  };

  // Function to update a product
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      img,
      size,
      price,
      description,
      type,
      status,
    };

    try {
      const response = await DataService.updateData(
        `/api/products/${productId}`,
        updatedProduct,
      );
      if (response) {
        navigate('/admin');
      }
    } catch (error) {
      setError('Failed to update product. Please try again.');
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const formElements = [
    {
      label: 'Name',
      type: 'text',
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: 'Product Name',
      required: true,
    },
    {
      label: 'Image',
      type: 'text',
      value: img,
      onChange: (e) => setImg(e.target.value),
      placeholder: 'Product Image',
      required: true,
    },
    {
      label: 'Size',
      type: 'dropdown',
      value: size,
      onChange: (e) => setSize(e.target.value),
      options: sizes.map((size) => ({ value: size, label: size })),
      required: true,
    },
    {
      label: 'Price',
      type: 'number',
      value: price,
      onChange: (e) => setPrice(e.target.value),
      placeholder: '100',
      required: true,
    },
    {
      label: 'Description',
      type: 'text',
      value: description,
      onChange: (e) => setDescription(e.target.value),
      placeholder: 'Description',
      required: true,
    },
    {
      label: 'Type',
      type: 'dropdown',
      value: type,
      onChange: (e) => setType(e.target.value),
      options: types.map((type) => ({ value: type.type, label: type.type })),
      required: true,
    },
    {
      label: 'Status',
      type: 'dropdown',
      value: status,
      onChange: (e) => setStatus(e.target.value),
      options: statuses.map((status) => ({ value: status, label: status })),
      required: true,
    },
  ];

  return (
    <Stack id="container">
      <FormComponent
        type={productId ? 'editPiece' : 'addNewPiece'}
        controls={formElements}
        handleSubmit={productId ? handleSubmitUpdate : handleSubmitCreate}
        buttonText={productId ? 'Update Product' : 'Add Product'}
        error={error}
      />
    </Stack>
  );
};

export default AddOrEditProductPage;
