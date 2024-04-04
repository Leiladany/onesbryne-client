import "./ClothesTypePage.css";
import { useState } from "react";

import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const ClothesTypePage = () => {
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

  return (
    <div id="page-container">
      <div className="clothesType-grid">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div className="clothesType-item" key={index}>
            <div
              className="clothesType-star"
              onClick={() => handleIfFavourite(index)}
            >
              {starClicked[index] ? (
                <IoIosStar size={25} color="black" />
              ) : (
                <IoIosStarOutline size={25} color="black" />
              )}
            </div>
            <div className="clothesType-box">Item {index}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothesTypePage;
