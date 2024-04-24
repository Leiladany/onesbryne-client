import "./ClothesDetailsPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/layout/button/Button";
import DataService from "../../components/services/DataService";
import ImgComponent from "../../components/layout/img/Img";

const ClothesDetailsPage = () => {
  const { productId } = useParams();

  // State
  const [product, setProduct] = useState();

  // Function to fetch the product
  const fetchProduct = async () => {
    try {
      const response = await DataService.fetchData(`/api/products/${productId}`);
      if (response) {
        setProduct(response);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (<>
    {!product ? (<p>Loading...</p>) : (

      <div className="clothsDetails-container">
        <div>
          <ImgComponent src={product.img} alt={product.name} className="admin-product-image" />
        </div>

        <div className="clothsDetails-info">
          <div>{product.code}</div>
          <div>{product.name}</div>
          <div>{product.size}</div>
          <div>{product.price}€</div>
          <div>{product.description}</div>
          <div>
            <Button children="Contactar" />
          </div>
        </div>
      </div>
    )
    }
  </>
  );
};

export default ClothesDetailsPage;
