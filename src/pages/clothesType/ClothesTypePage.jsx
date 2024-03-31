import "./ClothesTypePage.css";
import { useState } from "react";

import iconStarOn from "../../assets/clothes-star-on.png"
import iconStarOff from "../../assets/clothes-star-off.png"

const ClothesTypePage = () => {
  const [starClicked, setStarClicked] = useState({});

  const handleStarClick = (index) => {
    setStarClicked(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="page-container">
      <div className="clothes-grid-container">
        <div className="clothes-grid">
          {[1, 2, 3, 4, 5, 6].map(index => (
            <div className="clothes-item" key={index}>
              <img
                className="fav"
                src={starClicked[index] ? iconStarOn : iconStarOff}
                onClick={() => handleStarClick(index)}
                alt="Star"
              />
              <div className="box">Item {index}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothesTypePage;
