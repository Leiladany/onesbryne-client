import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Form } from '../components/layout/form';
import { DataService } from '../components/services/data-service';
import { types, sizes, statuses } from '../components/utils/arrays';
import { CircularProgress } from '@mui/joy';
import { adminToast } from '../components/utils/toasts';
import { PageContainer } from '../components/layout/containers';

export const NewProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('null');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (productId) {
      fetchProduct();
    } else if (location.state?.lastCode) {
      setCode(location.state.lastCode + 1);
    }
  }, [productId, location.state]);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await DataService.getData(`/api/products/${productId}`);
      if (response) {
        setCode(response.code);
        setName(response.name);
        setImg1(response.img[0]);
        setImg2(response.img[1]);
        setSize(response.size);
        setPrice(response.price);
        setDescription(response.description);
        setType(response.type);
        setStatus(response.status);
      }
    } catch (error) {
      console.log('Failed to fetch product. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    const product = {
      code,
      name,
      img: [img1, img2],
      size,
      price,
      description,
      type,
      status,
    };

    try {
      const response = await DataService.postData('/api/products', product);
      if (response.error) {
        adminToast.errorCreate();
      } else {
        navigate('/admin');
        adminToast.successCreate();
      }
    } catch (error) {
      console.log('Failed to create product. Please try again.');
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    const updatedProduct = {
      code,
      name,
      img: [img1, img2],
      size,
      price,
      description,
      type,
      status,
    };

    try {
      const response = await DataService.putData(`/api/products/${productId}`, updatedProduct);
      if (response) {
        navigate('/admin');
        adminToast.successUpdate();
      } else {
        adminToast.errorUpdate();
      }
    } catch (error) {
      console.log('Failed to update product. Please try again.');
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const newProductControls = [
    {
      label: 'Código',
      type: 'number',
      value: code,
      setValue: setCode,
      placeholder: location.state?.lastCode ? `Último código: ${location.state.lastCode}` : 'Código do produto',
      required: true,
    },
    {
      label: 'Nome',
      type: 'text',
      value: name,
      setValue: setName,
      placeholder: 'Nome do produto',
      required: true,
    },
    {
      label: 'Descrição',
      type: 'text',
      value: description,
      setValue: setDescription,
      placeholder: 'Descrição do produto',
      required: true,
    },
    {
      label: 'Imagem 1',
      type: 'text',
      value: img1,
      setValue: setImg1,
      placeholder: 'Link para a imagem 1',
      required: true,
    },
    {
      label: 'Imagem 2',
      type: 'text',
      value: img2,
      setValue: setImg2,
      placeholder: 'Link para a imagem 1',
      required: true,
    },
    {
      label: 'Preço',
      type: 'number',
      value: price,
      setValue: setPrice,
      placeholder: 'Preço do produto',
      required: true,
    },
    {
      label: 'Tamanho',
      type: 'dropdown',
      value: size,
      setValue: setSize,
      options: sizes.map((size) => size),
      required: true,
    },
    {
      label: 'Tipo',
      type: 'dropdown',
      value: type,
      setValue: setType,
      options: types.map((type) => type.type),
      required: true,
    },
    {
      label: 'Estado',
      type: 'dropdown',
      value: status,
      setValue: setStatus,
      options: statuses.map((status) => status),
      required: true,
    },
  ];

  return (
    <PageContainer>
      {isLoading ? (
        <CircularProgress variant='plain' color='neutral' />
      ) : (
        <Form
          type={productId ? 'editPiece' : 'addNewPiece'}
          controls={newProductControls}
          handleSubmit={productId ? handleSubmitUpdate : handleSubmitCreate}
          buttonText={productId ? 'Editar' : 'Adicionar'}
          isLoading={isSubmitLoading}
        />
      )}
    </PageContainer>
  );
};
