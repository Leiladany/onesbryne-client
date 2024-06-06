import './admin.page.css';
import { useState, useEffect } from 'react';
import { DataService } from '../components/services/data-service';
import { useNavigate } from 'react-router-dom';
import { LinkWithLine } from '../components/layout/link-with-line';
import { Button, Chip, Stack, Table } from '@mui/joy';
import { MdEdit, MdDelete } from 'react-icons/md';

export const AdminPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

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

  // Function to navigate to edit a product
  const handleEdit = (productId) => {
    navigate(`/admin/edit/${productId}`);
  };

  // Function to delete a product
  const handleDelete = async (productId) => {
    try {
      const response = await DataService.deleteData(
        `/api/products/${productId}`,
      );
      if (response) {
        setProducts(products.filter((product) => product.id !== productId));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Stack id="container" sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Stack component="section" sx={{ alignItems: 'center' }}>
        <LinkWithLine to="/admin/add" className="box">
          + Adicionar nova peça
        </LinkWithLine>
      </Stack>

      <Stack
        component="section"
        sx={{
          alignItems: { xs: 'normal', md: 'center' },
          overflowX: { xs: 'auto', md: 'visible' },
          width: '100%',
        }}
      >
        {products.length > 0 && (
          <Table
            borderAxis="bothBetween"
            color="neutral"
            size="sm"
            stickyHeader
            variant="plain"
            className="admin-table"
            sx={{
              width: '100%',
              borderCollapse: 'collapse',
              '& th': {
                textAlign: 'center',
                backgroundColor: 'primary.darkBlue',
                color: 'common.white',
              },
              '& tr': {
                color: 'neutral.400',
              },
              '& th:nth-of-type(5), & td:nth-of-type(5)': {
                display: { xs: 'none', lg: 'table-cell' },
              },
            }}
          >
            <thead>
              <tr>
                <th>Nome</th>
                <th>Imagem</th>
                <th>Tamanho</th>
                <th>Preço</th>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    {product.img ? (
                      <img
                        src={product.img[0]}
                        alt={product.name}
                        width="64px"
                        height="64px"
                        cover="true"
                      />
                    ) : null}
                  </td>
                  <td>{product.size}</td>
                  <td>{product.price} €</td>
                  <td>{product.description}</td>
                  <td>{product.type}</td>
                  <td>
                    {product.status === 'Disponível' && (
                      <Chip color="success">{product.status}</Chip>
                    )}
                    {product.status === 'Arquivado' && (
                      <Chip color="neutral">{product.status}</Chip>
                    )}
                    {product.status === 'Vendido' && (
                      <Chip color="danger">{product.status}</Chip>
                    )}
                  </td>
                  <td>
                    <Button
                      onClick={() => handleEdit(product.id)}
                      sx={{
                        p: 1,
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      <MdEdit size={20} color="white" />
                    </Button>

                    <Button
                      onClick={() => handleDelete(product.id)}
                      sx={{
                        p: 1,
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      <MdDelete size={20} color="white" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Stack>
    </Stack>
  );
};
