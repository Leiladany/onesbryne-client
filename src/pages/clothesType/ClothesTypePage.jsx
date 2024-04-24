import "./ClothesTypePage.css";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DataService from "../../components/services/DataService";
import ImgComponent from "../../components/layout/img/Img";

import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const ClothesTypePage = () => {
  const { type } = useParams();

  // States
  const [products, setProducts] = useState([]);
  const [starClicked, setStarClicked] = useState({});

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

  // Function to handle if item is favourite
  const handleIfFavourite = (index) => {
    setStarClicked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Function to filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => product.type.toLowerCase() === type.toLowerCase());
  }, [products, type]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div id="page-container">
      <h3>{type.toUpperCase()}</h3>
      <div className="clothesType-grid">
        {filteredProducts.map((product, index) => (
          <div className="clothesType-product" key={index}>
            <div
              className="clothesType-star"
              onClick={() => handleIfFavourite(index)}
            >
              {starClicked[index] ? (
                <IoIosStar size={25} color="white" />
              ) : (
                <IoIosStarOutline size={25} color="white" />
              )}
            </div>

            <ImgComponent src={product.img} alt={product.name} className="admin-product-image" />

            <Link to={`/clothes/${type}/${product._id}`}>
              <div className="clothesType-text">
                <p>{product.name}</p>
                <p>{product.price}€ | {product.size}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothesTypePage;
