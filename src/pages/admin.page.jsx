import './admin.page.css';
import { useState, useEffect } from 'react';
import { DataService } from '../components/services/data-service';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/joy';
import { adminToast } from '../components/utils/toasts';
import { AdminTable } from '../components/layout/admin-table';

export const AdminPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const products = await DataService.fetchData('/api/products');
      if (products) {
        products.sort((a, b) => (a.code > b.code ? 1 : -1));
        setProducts(products);
      }
    } catch (error) {
      console.error('Error fetching products');
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
    <Stack id="container" sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h4">Admin</Typography>

      <Stack component="section" sx={{ alignItems: 'center' }}>
        <Button component={Link} to="/admin/add" className="box">
          + Adicionar nova peça
        </Button>
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
          <AdminTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Stack>
    </Stack>
  );
};
