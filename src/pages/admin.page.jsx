import { useState, useEffect } from 'react';
import { DataService } from '../components/services/data-service';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack, Typography, CircularProgress } from '@mui/joy';
import { adminToast } from '../components/utils/toasts';
import { AdminTable } from '../components/layout/admin-table';
import { PageContainer } from '../components/layout/containers';

export const AdminPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [lastCode, setLastCode] = useState(null);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const products = await DataService.getData('/api/products');
      if (products) {
        products.sort((a, b) => (a.code > b.code ? 1 : -1));
        setProducts(products);
        if (products.length > 0) {
          setLastCode(products[products.length - 1].code);
        }
      }
    } catch (error) {
      console.error('Error fetching products');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (productId) => {
    navigate(`/admin/edit/${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await DataService.deleteData(
        `/api/products/${productId}`,
      );
      if (response) {
        setProducts(products.filter((product) => product.id !== productId));
        adminToast.successDelete();
      } else {
        adminToast.errorDelete();
      }
    } catch (error) {
      console.error('Error deleting product');
    }
  };

  return (
    <PageContainer sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h4">Admin</Typography>

      <Stack component="section" sx={{ alignItems: 'center' }}>
        <Button
          component={Link}
          to="/admin/add"
          state={{ lastCode }}
          className="box"
        >
          + Adicionar nova peça
        </Button>
      </Stack>

      {isLoading ? (
        <CircularProgress variant="plain" color="neutral" />
      ) : (
        <Stack
          component="section"
          sx={{
            alignItems: { xs: 'normal', md: 'center' },
            overflowX: { xs: 'auto', md: 'visible' },
            width: '100%',
          }}
        >
          {products.length > 0 && (
            <AdminTable
              products={products}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </Stack>
      )}
    </PageContainer>
  );
};
