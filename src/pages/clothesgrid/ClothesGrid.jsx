import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ClothesGrid.css";

const ClothesGrid = () => {
  const [starClicked, setStarClicked] = useState({});

  const handleStarClick = (index) => {
    setStarClicked(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="clothes-grid-container">
        <div className="clothes-grid">
          {[1, 2, 3, 4, 5, 6].map(index => (
            <div className="clothes-item" key={index}>
              <img
                className="fav"
                src={starClicked[index] ? "/star2.png" : "/star1.png"}
                onClick={() => handleStarClick(index)}
                alt="Star"
              />
              <div className="box">Item {index}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClothesGrid;
