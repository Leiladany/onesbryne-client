import { useState, useEffect } from "react";
import DataService from "../../components/DataService";
import { Link, useNavigate } from "react-router-dom";
import "./AdminPage.css";

const API_URL = import.meta.env.VITE_API_URL;

const AdminPage = () => {
  const navigate = useNavigate();

  // States
  const [products, setProducts] = useState([]);

  // Function to fetch all the products
  const fetchAllProducts = async () => {
    try {
      const response = await DataService.fetchData("/api/products");
      if (response) {
        setProducts(response);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to navigate to edit a product
  const handleEdit = (productId) => {
    navigate(`/admin/edit/${productId}`)
  }

  // Function to delete a product
  const handleDelete = async (productId) => {
    try {
      const response = await DataService.deleteData(
        `/api/products/${productId}`
      );
      if (response) {
        setProducts(products.filter((product) => product._id !== productId));
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div id="page-container">
      <Link to="/admin/add" className="admin-link">
        Add New Piece
      </Link>

      {products.length > 0 && (
        <table className="admin-products-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Imagem</th>
              <th>Tamanho</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>
                  {product.img ?
                    <img
                      src={product.img.startsWith('http') ? product.img : `${API_URL}/${product.img}`}
                      alt={product.name}
                      className="admin-product-image"
                    /> : null
                  }
                </td>
                <td>{product.size}</td>
                <td>{product.price} €</td>
                <td className="admin-product-description">
                  {product.description}
                </td>
                <td>{product.type}</td>
                <td>{product.status}</td>
                <td>
                  <button onClick={() => handleEdit(product._id)}
                    className="admin-edit-button">
                    Editar
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="admin-delete-button"
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      }
    </div >
  );
};

export default AdminPage;
