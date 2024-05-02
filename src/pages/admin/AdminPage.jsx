import "./AdminPage.css";
import { useState, useEffect } from "react";
import DataService from "../../components/services/DataService";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/layout/button/Button";
import LinkComponent from "../../components/layout/link/Link";
import ImgComponent from "../../components/layout/img/Img";

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
    <div id="container">
      <LinkComponent to="/admin/add" className="box" children="Add New Piece" />

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
                    <ImgComponent src={product.img} alt={product.name} className="admin-product-image" /> : null
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
                  <ButtonComponent onClick={() => handleEdit(product._id)} children="Editar" />

                  <ButtonComponent onClick={() => handleDelete(product._id)} children="Apagar" />
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
