import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './ClothesGrid.css';

const ClothesGrid = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="clothes-grid-container">
        <div className="clothes-grid">
          <div className="clothes-item">Item 1</div>
          <div className="clothes-item">Item 2</div>
          <div className="clothes-item">Item 3</div>
          <div className="clothes-item">Item 4</div>
          <div className="clothes-item">Item 5</div>
          <div className="clothes-item">Item 6</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClothesGrid;